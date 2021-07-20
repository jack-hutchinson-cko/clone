import systemPath from 'path';
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import matter from 'gray-matter';
import striptags from 'striptags';
import MDX from '@mdx-js/runtime';
import algoliasearch from 'algoliasearch';

import { ThemeProvider } from 'theme/ThemeProvider';
import { mdxComponents } from 'components/MDXProvider';
import { ApplicationID, AdminAPIKey, ABC_DOCS_INDEX_NAME } from 'constants/algoliasearch';
import { forEachFileTree } from 'lib/fileParser';
import { unescape } from 'lib/unescape';

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

const getIndexArticleItem = ({
  title: name,
  path,
  filePath,
  parentArticles,
}: GetIndexArticleItemParams): IndexItemType => {
  const source = fs.readFileSync(`${filePath}/index.mdx`);

  const { content, data } = matter(source);

  const html = renderToString(
    <ThemeProvider>
      <MDX components={mdxComponents}>{content}</MDX>
    </ThemeProvider>,
  );

  const body = unescape(striptags(html, [], ' ')).replace(/\s+/g, ' ');

  return {
    title: data.title,
    name,
    path,
    parentArticles,
    body,
    headBody: body,
  };
};

export const createIndexForAlgolia = async (
  filePath = systemPath.join(process.cwd(), 'docs/ABC'),
): Promise<void> => {
  if (!ApplicationID || !AdminAPIKey) {
    throw new Error('ApplicationID or AdminAPIKey are not specified');
  }

  const indexResult: IndexItemType[] = [];

  forEachFileTree(
    {
      parentFilePath: filePath,
      parentPath: '',
      parentArticles: [],
    },
    (childData) => {
      const indexItem = getIndexArticleItem(childData);
      indexResult.push(indexItem);
    },
  );

  const client = algoliasearch(ApplicationID, AdminAPIKey);
  const index = client.initIndex(ABC_DOCS_INDEX_NAME);

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

createIndexForAlgolia()
  .then(() => {
    console.log('algolia search index was successfully generated/updated');
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
