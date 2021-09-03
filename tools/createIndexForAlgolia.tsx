/* eslint-disable no-await-in-loop */
import systemPath from 'path';
import dotenv from 'dotenv';
import React from 'react';
import { renderToString } from 'react-dom/server';
import striptags from 'striptags';
import MDX from '@mdx-js/runtime';
import algoliasearch from 'algoliasearch';
import { CLIENT_SETTINGS_BY_TYPE } from 'constants/clientSettings';
import { ThemeProvider } from 'theme/ThemeProvider';
import { mdxComponents } from 'components/MDXProvider';
import {
  forEachFileTree,
  getMdxFileData,
  getFAQItems,
  getFAQItemBody,
  getFAQHeaderProperty,
  ForEachTreeCallBackParamsType,
} from 'lib/fileParserCommon';
import { unescape } from 'lib/unescape';

dotenv.config();
export const ApplicationID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
export const AdminAPIKey = process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY;

type IndexItemType = {
  title: string;
  name: string;
  path: string;
  parentArticles: string[];
  body: string;
  headBody: string;
};

type GetIndexArticleItemParams = {
  title: string;
  path: string;
  filePath: string;
  parentArticles: string[];
};

const getResultTextFromMdxFile = (content: string): string => {
  const html = renderToString(
    <ThemeProvider>
      <MDX components={mdxComponents}>{content}</MDX>
    </ThemeProvider>,
  );

  // need to remove .slice(0, 40000) after changing of plan
  return (unescape(striptags(html, [], ' ')).replace(/\s+/g, ' ') || '').slice(0, 40000);
};

const getIndexArticleItem = ({
  title: name,
  path,
  filePath,
  parentArticles,
}: GetIndexArticleItemParams): IndexItemType => {
  const { content, data } = getMdxFileData(`${filePath}/index.mdx`);

  const body = getResultTextFromMdxFile(content);

  return {
    title: data?.title || '',
    name,
    path,
    parentArticles,
    body,
    headBody: body,
  };
};

export const createDocArticlesIndex = async (
  filePath: string,
  searchIndexName: string,
): Promise<void> => {
  if (!ApplicationID || !AdminAPIKey) {
    throw new Error('ApplicationID or AdminAPIKey are not specified');
  }

  const indexResult: IndexItemType[] = [];

  forEachFileTree(
    {
      parentFilePath: systemPath.join(process.cwd(), filePath),
      parentPath: '',
      parentArticles: [],
    },
    (childData) => {
      const indexItem = getIndexArticleItem(childData);
      indexResult.push(indexItem);
    },
  );

  const client = algoliasearch(ApplicationID, AdminAPIKey);
  const index = client.initIndex(searchIndexName);

  index.setSettings({
    attributesToSnippet: ['body:40', 'title:20', 'headBody:12'],
    snippetEllipsisText: '...',
    searchableAttributes: ['title', 'body', 'headBody'],
  });

  await index.clearObjects();
  await index.saveObjects(indexResult, {
    autoGenerateObjectIDIfNotExist: true,
  });
};

type FAQIndexItemType = {
  faqSection: string;
  path: string;
  body: string;
  title: string;
  popularity: string;
};

const getFaqSectionItem = (childData: ForEachTreeCallBackParamsType): FAQIndexItemType[] => {
  const { filePath, path } = childData;

  const {
    content,
    data: { title: faqSection = '' },
  } = getMdxFileData(`${filePath}/index.mdx`);
  const faqItems = getFAQItems(content);

  return faqItems.map((faqItem) => {
    const mdxBody = getFAQItemBody(faqItem);
    const { title = '', popularity = '' } = getFAQHeaderProperty(faqItem);
    const body = getResultTextFromMdxFile(mdxBody);

    return {
      faqSection,
      path,
      body,
      mdxBody,
      title,
      popularity,
    };
  });
};

export const createFAQIndex = async (filePath: string, searchIndexName: string): Promise<void> => {
  if (!ApplicationID || !AdminAPIKey) {
    throw new Error('ApplicationID or AdminAPIKey are not specified');
  }

  let indexResult: FAQIndexItemType[] = [];

  forEachFileTree(
    {
      parentFilePath: systemPath.join(process.cwd(), filePath),
      parentPath: '/faq',
      parentArticles: [],
    },
    (childData) => {
      indexResult = indexResult.concat(getFaqSectionItem(childData));
    },
  );

  const client = algoliasearch(ApplicationID, AdminAPIKey);
  const index = client.initIndex(searchIndexName);

  index.setSettings({
    attributesToSnippet: ['body:20', 'title:20'],
    snippetEllipsisText: '...',
    searchableAttributes: ['title', 'body', 'mdxBody'],
  });

  await index.clearObjects();
  await index.saveObjects(indexResult, {
    autoGenerateObjectIDIfNotExist: true,
  });
};

const createAllIndexes = async () => {
  try {
    await Promise.all(
      (
        Object.values(CLIENT_SETTINGS_BY_TYPE) as {
          docArticlesFilePath: string;
          searchIndexName: string;
        }[]
      ).map(({ docArticlesFilePath, searchIndexName }) =>
        createDocArticlesIndex(docArticlesFilePath, searchIndexName),
      ),
    );

    console.log('algolia docs article search index was successfully generated/updated');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  try {
    await Promise.all(
      (
        Object.values(CLIENT_SETTINGS_BY_TYPE) as {
          FAQFilePath: string;
          searchFAQIndexName: string;
        }[]
      ).map(({ FAQFilePath, searchFAQIndexName }) =>
        createFAQIndex(FAQFilePath, searchFAQIndexName),
      ),
    );

    console.log('algolia FAQ search index was successfully generated/updated');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  process.exit(0);
};

createAllIndexes();
