/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import { get, lowerCase } from 'lodash';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { BreadCrumbsItems, DocsPathItem } from 'types/content';
import { NavTreeElementWithFilePatch } from 'types/navTree';
import { getAnchorUrl } from 'lib/url';
import { ABCDocsPath } from 'constants/filePath';

const getAnchorsNavItems = ({ content = '' }: { content: string }) =>
  (content.match(/^#+ (.*$)/gim) || []).map((headerItem) => {
    const title = headerItem.replace(/^#+ (.*$)/gim, '$1');
    return {
      title,
      href: getAnchorUrl(title),
    };
  });

export const getDocArticleData = async ({
  filePath,
}: {
  filePath: string;
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
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  const anchorsNavItems = getAnchorsNavItems({ content });

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
      const children = fs.readdirSync(parentFilePath);

      for (const child of children) {
        const filePath = `${parentFilePath}/${child}`;

        if (fs.statSync(filePath).isDirectory()) {
          const title = child.replace(/^[1-9]+ /, '');
          const currentSlug = lowerCase(title).replace(/ /g, '-');
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
