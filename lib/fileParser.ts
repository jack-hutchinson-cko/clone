/* eslint-disable no-useless-escape */
/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import { get } from 'lodash';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import { AnchorItem } from 'types/anchors';
import { BreadCrumbsItems, DocsPathItem } from 'types/content';
import { NavTreeElementWithFilePatch } from 'types/navTree';
import { clientSettings } from 'constants/clientSettings';
import { getAnchorUrl } from 'lib/url';
import {
  getTitleFromFileName,
  getSlugFromTitle,
  getAnchors,
  getMdxFileData,
  isMdxSourceFolder,
  forEachFileTree,
  getFAQItems,
  getFAQHeaderProperty,
} from './fileParserCommon';

export type ArticleSectionSource = {
  url?: string;
  content: string;
};

export type ArticleSectionData = {
  url?: string;
  content: MDXRemoteSerializeResult;
};

type ChildArticlesType = { title: string; href: string; description: string }[];

const getAnchorPropsFromTitle = (
  title: string,
): {
  title: string;
  href: string;
} => {
  const regexMdLinks = RegExp(/\[([^\[]+)\](\(.*\))/gm);
  const singleMatch = RegExp(/\[([^\[]+)\]\((.*)\)/);
  const matchedLink = (title.match(regexMdLinks) || [])[0];
  if (matchedLink) {
    const result = singleMatch.exec(matchedLink) || [];

    return {
      title: result[1],
      href: result[2],
    };
  }

  return {
    title,
    href: getAnchorUrl(title),
  };
};

export const getAnchorsNavItems = ({
  content = '',
  childrenArticles = [],
}: {
  content: string;
  childrenArticles?: ChildArticlesType;
}): AnchorItem[] => {
  const contentAnchors: AnchorItem[] = getAnchors(content).map((headerItem) => {
    const title = headerItem.replace(/^#+ (.*$)/gim, '$1');

    return getAnchorPropsFromTitle(title);
  });

  const childArticlesAnchors: AnchorItem[] = childrenArticles.map(({ title }) =>
    getAnchorPropsFromTitle(title),
  );

  return contentAnchors.concat(childArticlesAnchors);
};

type SerializedMDXDataType = Promise<MDXRemoteSerializeResult>;

export const serializeMdxData = ({
  content,
  data = {},
}: {
  content: string;
  data: { [key: string]: string };
}): SerializedMDXDataType =>
  serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      // eslint-disable-next-line global-require
      remarkPlugins: [require('remark-grid-tables')],
      rehypePlugins: [],
    },
    scope: data,
  });

export const getDocArticleData = async ({
  filePath,
  childrenArticles,
  options = { addGitInfo: true },
}: {
  filePath: string;
  childrenArticles?: ChildArticlesType;
  options?: {
    addGitInfo?: boolean;
  };
}): Promise<{
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string };
  anchorsNavItems: { title: string; href: string }[];
}> => {
  const { data, content } = getMdxFileData(filePath, options);
  const mdxSource = await serializeMdxData({ data, content });
  const anchorsNavItems = getAnchorsNavItems({ content, childrenArticles });

  return {
    source: mdxSource,
    frontMatter: data,
    anchorsNavItems,
  };
};

type ArticleSettingsType = {
  slugToFilePathMap: { [key: string]: string };
  slugToArticleNameMap: { [key: string]: string };
  sidebarDocLinks: NavTreeElementWithFilePatch[];
  docsPathUrl: DocsPathItem[];
};

const getFileIndex = (fileName: string) => {
  const result = fileName.match(/^[0-9]+/);

  return result ? Number(result[0]) : 0;
};

export const getDocArticlesSettings = (rootFilePath: string): ArticleSettingsType => {
  const root = {
    filePath: rootFilePath,
    path: '',
    children: [] as NavTreeElementWithFilePatch[],
  };

  const docsPathUrl = [];
  const stack = [root];
  const slugToFilePathMap = {} as { [key: string]: string };
  const slugToArticleNameMap = {} as { [key: string]: string };

  while (stack.length) {
    const currentNode = stack.pop();

    if (currentNode) {
      const { filePath: parentFilePath, path: parentPath } = currentNode;
      const children = fs
        .readdirSync(parentFilePath)
        .sort((a, b) => getFileIndex(a) - getFileIndex(b));

      for (const child of children) {
        const filePath = `${parentFilePath}/${child}`;

        if (isMdxSourceFolder(filePath)) {
          const title = getTitleFromFileName(child);
          const currentSlug = getSlugFromTitle(title);
          const path = `${parentPath}/${currentSlug}`;
          const docsPathParams = path.slice(1).split('/');

          slugToFilePathMap[path] = `${filePath}/index.mdx`;
          slugToArticleNameMap[path] = title;

          docsPathUrl.push({ params: { docsPathParams } });
          const childNode = { title, path, filePath, children: [], id: path };
          currentNode.children.push(childNode);
          stack.push(childNode);
        }
      }
    }
  }

  return { sidebarDocLinks: root.children, docsPathUrl, slugToFilePathMap, slugToArticleNameMap };
};

export const getChildrenArticle = (
  filePath: string,
  docsPathParams: string[],
): ChildArticlesType => {
  const folderPath = filePath.replace('/index.mdx', '');

  const children = fs.readdirSync(folderPath);

  const result = [];

  for (const child of children) {
    const childFilePath = `${folderPath}/${child}`;

    if (isMdxSourceFolder(childFilePath)) {
      const title = getTitleFromFileName(child);
      const currentSlug = getSlugFromTitle(title);
      const { data } = getMdxFileData(`${childFilePath}/index.mdx`);
      const description = get(data, 'description');

      if (description) {
        result.push({
          title,
          href: `/${[...docsPathParams, currentSlug].join('/')}`,
          description,
        });
      }
    }
  }

  return result;
};

export const docksArticleSettings = getDocArticlesSettings(clientSettings.fullFilePath);

export const getDocsPathUrl = (): DocsPathItem[] => docksArticleSettings.docsPathUrl;

export const getBreadCrumbsItem = (docsPathParams: string[]): BreadCrumbsItems => {
  const { slugToArticleNameMap } = docksArticleSettings;
  return docsPathParams.map((currentUrl, index: number) => {
    const url = `/${docsPathParams.slice(0, index + 1).join('/')}`;
    const name = get(slugToArticleNameMap, url, '');

    return {
      url,
      name,
    };
  });
};

export const getFileNameFromPath = (docsPathParams: string[]): string => {
  const { slugToFilePathMap } = docksArticleSettings;
  const fullSlug = `/${docsPathParams.join('/')}`;

  return get(slugToFilePathMap, fullSlug, '');
};

const POPULAR_ITEMS_LENGTH = 10;

type ParsedFAQItem = {
  faqSection: string;
  faqItem: string;
  popularity?: string;
};

export const getPopularItemsMDXSource = (faqItems: ParsedFAQItem[]): string => {
  const sortedItems = faqItems
    .sort((item1, item2) => Number(item2.popularity) - Number(item1.popularity))
    .slice(0, POPULAR_ITEMS_LENGTH);

  let currentFaqSection = '';

  return sortedItems.reduce((result, { faqSection, faqItem }) => {
    const isSameFaqSection = faqSection === currentFaqSection;
    const separator =
      faqSection === currentFaqSection
        ? '\n\n'
        : `\n\n<FAQSectionLabel>${faqSection}</FAQSectionLabel>\n\n`;

    if (!isSameFaqSection) {
      currentFaqSection = faqSection;
    }

    return `${result}${separator}${faqItem}`;
  }, '');
};

export type FAQSectionType = {
  href: string;
  imageSrc: string;
  darkThemeImageSrc?: string;
  title?: string;
  children: string;
};
type FAQPathType = { params: { faqSection: string } };

export const getFAQSectionSettings = (
  faqFilePath: string,
): {
  popularFAQItems: string;
  faqSections: FAQSectionType[];
  pathUrls: FAQPathType[];
  mapFaqSectionToFilePath: { [key: string]: string };
} => {
  const faqSections: FAQSectionType[] = [];
  const pathUrls: FAQPathType[] = [];
  const mapFaqSectionToFilePath: { [key: string]: string } = {};
  let allFAQItems: ParsedFAQItem[] = [];

  try {
    if (faqFilePath) {
      forEachFileTree({ parentFilePath: faqFilePath, parentPath: '/faq' }, (params) => {
        const { path, filePath } = params;
        const fileSourcePath = `${filePath}/index.mdx`;
        const faqSection = path.replace('/faq/', '');

        const {
          data: {
            title,
            previewIcon: imageSrc = '',
            previewIconDark: darkThemeImageSrc = '',
            description: children = '',
          },
          content,
        } = getMdxFileData(fileSourcePath, { addGitInfo: false });

        const faqItems = getFAQItems(content).map((faqItem) => {
          const { popularity } = getFAQHeaderProperty(faqItem);
          return {
            faqSection: title || '',
            popularity,
            faqItem,
          };
        });

        allFAQItems = allFAQItems.concat(faqItems);

        mapFaqSectionToFilePath[faqSection] = fileSourcePath;
        pathUrls.push({ params: { faqSection } });
        faqSections.push({ href: path, title, imageSrc, darkThemeImageSrc, children });
      });
    }
  } catch (error) {
    console.log(error);
  }

  return {
    popularFAQItems: getPopularItemsMDXSource(allFAQItems),
    faqSections,
    pathUrls,
    mapFaqSectionToFilePath,
  };
};

export const faqSectionSettings = getFAQSectionSettings(clientSettings.fullFaqPath);

export const getFAQSections = (): FAQSectionType[] => faqSectionSettings.faqSections;
export const getFAQPathUrls = (): FAQPathType[] => faqSectionSettings.pathUrls;
export const getPopularFAQItems = (): SerializedMDXDataType => {
  const { popularFAQItems } = faqSectionSettings;
  return serializeMdxData({ data: {}, content: popularFAQItems });
};
export const getFileNameFromFAQPath = (faqPath: string): string =>
  get(faqSectionSettings, `mapFaqSectionToFilePath.${faqPath}`) || '';
