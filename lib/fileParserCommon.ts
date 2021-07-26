/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import { lowerCase } from 'lodash';

type ForEachFileTreeParams = {
  parentFilePath: string;
  parentPath: string;
  parentArticles: string[];
  breadcrumbs?: { url: string; title: string }[];
};

type CallBackParamsType = {
  title: string;
  path: string;
  filePath: string;
  parentArticles: string[];
  breadcrumbs: { url: string; title: string }[];
};

export const getTitleFromFileName = (fileName: string): string => fileName.replace(/^[0-9]+ /, '');
export const getSlugFromTitle = (title: string): string => lowerCase(title).replace(/ /g, '-');

export const forEachFileTree = (
  { parentFilePath, parentPath, parentArticles = [], breadcrumbs = [] }: ForEachFileTreeParams,
  callBack: (params: CallBackParamsType) => void | boolean,
): void => {
  const children = fs.readdirSync(parentFilePath);

  for (const child of children) {
    const filePath = `${parentFilePath}/${child}`;

    if (fs.statSync(filePath).isDirectory()) {
      const title = getTitleFromFileName(child);
      const currentSlug = getSlugFromTitle(title);
      const path = `${parentPath}/${currentSlug}`;

      const childNode = { title, path, filePath, parentArticles, breadcrumbs };

      if (callBack({ ...childNode })) {
        return;
      }
      forEachFileTree(
        {
          parentFilePath: filePath,
          parentPath: path,
          parentArticles: [...parentArticles, title],
          breadcrumbs: [...breadcrumbs, { url: path, title }],
        },
        callBack,
      );
    }
  }
};
