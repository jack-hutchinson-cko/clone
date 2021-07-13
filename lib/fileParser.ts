/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import { get, lowerCase } from 'lodash';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { BreadCrumbsItems, DocsPathItem } from 'types/content';
import { NavTreeElementWithFilePatch } from 'types/navTree';
import { ABCDocsPath } from 'constants/filePath';
import { getAnchorUrl } from 'lib/url';

type ChildArticlesType = { title: string; href: string; description: string }[];

const getAnchorsNavItems = ({
  content = '',
  childrenArticles = [],
}: {
  content: string;
  childrenArticles?: ChildArticlesType;
}) => {
  const contentAnchors = (content.match(/^(#|##) (.*$)/gim) || []).map((headerItem) => {
    const title = headerItem.replace(/^#+ (.*$)/gim, '$1');
    return {
      title,
      href: getAnchorUrl(title),
    };
  });

  const childArticlesAnchors = childrenArticles.map(({ title }) => ({
    title,
    href: getAnchorUrl(title),
  }));

  return contentAnchors.concat(childArticlesAnchors);
};

export const getDocArticleData = async ({
  filePath,
  childrenArticles,
}: {
  filePath: string;
  childrenArticles?: ChildArticlesType;
}): Promise<{
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string };
  anchorsNavItems: { title: string; href: string }[];
}> => {
  const source = fs.readFileSync(filePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      // eslint-disable-next-line global-require
      remarkPlugins: [require('remark-grid-tables')],
      rehypePlugins: [],
    },
    scope: data,
  });

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

const getTitleFromFileName = (fileName: string): string => fileName.replace(/^[0-9]+ /, '');
const getSlugFromTitle = (title: string): string => lowerCase(title).replace(/ /g, '-');
const getFileIndex = (fileName: string) => {
  const result = fileName.match(/^[0-9]+/);

  return result ? Number(result[0]) : 0;
};

export const getDocArticlesSettings = (rootFilePath = ABCDocsPath): ArticleSettingsType => {
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

        if (fs.statSync(filePath).isDirectory()) {
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

    if (fs.statSync(childFilePath).isDirectory()) {
      const title = getTitleFromFileName(child);
      const currentSlug = getSlugFromTitle(title);
      const source = fs.readFileSync(`${childFilePath}/index.mdx`);
      const { data } = matter(source);
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

export const docksArticleSettings = getDocArticlesSettings();

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

type ForEachFileTreeParams = {
  parentFilePath: string;
  parentPath: string;
  parentArticles: string[];
};

type CallBackParamsType = {
  title: string;
  path: string;
  filePath: string;
  parentArticles: string[];
};

export const forEachFileTree = (
  { parentFilePath, parentPath, parentArticles = [] }: ForEachFileTreeParams,
  callBack: (params: CallBackParamsType) => void,
): void => {
  const children = fs.readdirSync(parentFilePath);

  for (const child of children) {
    const filePath = `${parentFilePath}/${child}`;

    if (fs.statSync(filePath).isDirectory()) {
      const title = getTitleFromFileName(child);
      const currentSlug = getSlugFromTitle(title);
      const path = `${parentPath}/${currentSlug}`;

      const childNode = { title, path, filePath, parentArticles };

      callBack({ ...childNode });
      forEachFileTree(
        {
          parentFilePath: filePath,
          parentPath: path,
          parentArticles: [...parentArticles, title],
        },
        callBack,
      );
    }
  }
};
