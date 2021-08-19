/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { serialize } from 'next-mdx-remote/serialize';
import { ContentPageData, ContentPageType } from 'types/content';
import {
  getTitleFromFileName,
  getSlugFromTitle,
  forEachFileTree,
  getMdxFileData,
  getAnchors,
  isMdxSourceFolder,
} from './fileParserCommon';

import { getAnchorUrl } from './url';

type GetPageMetadataReturnType = {
  title?: string;
  account?: string;
  modifiedDate?: string;
  lastAuthor?: string;
  breadcrumbs?: { url: string; title: string }[];
  sections?: { slug: string; title: string }[];
  children?: { url: string; title: string }[];
  isSelectedPage: boolean;
};

export const getPageMetadata = (
  sourceUrl: string,
  {
    filePath,
    path,
    breadcrumbs,
  }: { filePath: string; path: string; breadcrumbs: { url: string; title: string }[] },
): GetPageMetadataReturnType => {
  if (path === sourceUrl) {
    const { content, data } = getMdxFileData(`${filePath}/index.mdx`);
    const { title, account, modifiedDate, lastAuthor } = data;

    const sections = (content.match(/^(#|##) (.*$)/gim) || []).map((headerItem) => {
      const sectionTitle = headerItem.replace(/^#+ (.*$)/gim, '$1');
      return {
        title: sectionTitle,
        slug: sectionTitle.replace(/ /g, '_'),
      };
    });

    const children = [];

    const childrenFolders = fs.readdirSync(filePath);
    for (const child of childrenFolders) {
      if (isMdxSourceFolder(`${filePath}/${child}`)) {
        const childTitle = getTitleFromFileName(child);
        const url = `${path}/${getSlugFromTitle(childTitle)}`;

        children.push({ title: childTitle, url });
      }
    }

    return {
      title,
      account,
      modifiedDate,
      lastAuthor,
      breadcrumbs,
      sections,
      children,
      isSelectedPage: true,
    };
  }

  return {
    isSelectedPage: false,
  };
};

export const getPageData = (
  sourceUrl: string,
  { filePath, path }: { filePath: string; path: string },
): { isSelectedPage: boolean; content?: string; data?: ContentPageData } => {
  if (path === sourceUrl) {
    const { data, content } = getMdxFileData(`${filePath}/index.mdx`, { addGitInfo: false });

    return {
      content,
      data: data as ContentPageData,
      isSelectedPage: true,
    };
  }

  return {
    isSelectedPage: false,
  };
};

export const findPageData = ({
  parentFilePath,
  pageUrl,
}: {
  parentFilePath: string;
  pageUrl: string;
}): { content: string; data: ContentPageData } | undefined => {
  let result;

  forEachFileTree(
    {
      parentFilePath,
      parentPath: '',
      parentArticles: [],
    },
    (data) => {
      const { isSelectedPage, ...otherProps } = getPageData(pageUrl, data);
      if (isSelectedPage) {
        result = otherProps;
        return true;
      }

      return false;
    },
  );

  return result;
};

type PageMetadataType = {
  title?: string;
  account?: string;
  breadcrumbs?: { url: string; title: string }[];
  sections?: { slug: string; title: string }[];
  children?: { url: string; title: string }[];
};

export const findPageMetadata = ({
  parentFilePath,
  pageUrl,
}: {
  parentFilePath: string;
  pageUrl: string;
}): PageMetadataType => {
  let result = {};

  forEachFileTree(
    {
      parentFilePath,
      parentPath: '',
      parentArticles: [],
    },
    (data) => {
      const { isSelectedPage, ...otherProps } = getPageMetadata(pageUrl, data);
      if (isSelectedPage) {
        result = otherProps;
        return true;
      }

      return false;
    },
  );

  return result;
};

export const parseDocContent = async ({
  content,
  data,
  sectionUrl,
}: {
  content: string;
  data: ContentPageData;
  sectionUrl?: string;
}): Promise<{
  pageContent: MDXRemoteSerializeResult;
  pageData: ContentPageData;
  type: ContentPageType;
}> => {
  let pageContent = content;
  let type = ContentPageType.PAGE;

  if (sectionUrl) {
    const anchors = getAnchors(content).map((anchor) => [
      anchor,
      getAnchorUrl(anchor.replace(/^#+ (.*$)/gim, '$1'), false),
    ]);

    const selectedAnchor = anchors.reduce<[string, number] | null>(
      (result, [title, url], index) => {
        if (sectionUrl === url) return [title, index];
        return result;
      },
      null,
    );

    if (selectedAnchor) {
      const [startAnchor, index] = selectedAnchor;
      const nextAnchor = anchors[index + 1];

      pageContent = content.slice(
        content.indexOf(startAnchor),
        nextAnchor ? content.indexOf(nextAnchor[0]) : undefined,
      );
      type = ContentPageType.SECTION;
    }
  }

  const compilePageContent = await serialize(pageContent, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      // eslint-disable-next-line global-require
      remarkPlugins: [require('remark-grid-tables')],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    pageContent: compilePageContent,
    pageData: data,
    type,
  };
};
