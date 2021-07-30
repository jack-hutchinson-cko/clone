/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import {
  getTitleFromFileName,
  getSlugFromTitle,
  forEachFileTree,
  getMdxFileData,
} from './fileParserCommon';

type GetPAgeMetadataReturnType = {
  title?: string;
  account?: string;
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
): GetPAgeMetadataReturnType => {
  if (path === sourceUrl) {
    const { content, data } = getMdxFileData(`${filePath}/index.mdx`);
    const { title, account } = data;

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
      if (fs.statSync(`${filePath}/${child}`).isDirectory()) {
        const childTitle = getTitleFromFileName(child);
        const url = `${path}/${getSlugFromTitle(childTitle)}`;

        children.push({ title: childTitle, url });
      }
    }

    return {
      title,
      account,
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
