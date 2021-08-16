/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import { execSync } from 'child_process';
import matter from 'gray-matter';
import dateFormat from 'dateformat';
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

export const getAnchors = (content: string): string[] => content.match(/^(#|##) (.*$)/gim) || [];

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

const insertRelatedFiles = (data: string, filePath: string): string => {
  const reg = RegExp(/include\('[^']*'\)/g);

  if (reg.test(data)) {
    return data.replace(reg, (includeOption: string) => {
      try {
        const fileRelativePath = includeOption.slice(9, includeOption.length - 2);
        const fullPath = `${filePath.slice(0, filePath.lastIndexOf('/') + 1)}${fileRelativePath}`;
        const source = fs.readFileSync(fullPath);
        const { content } = matter(source);

        return insertRelatedFiles(content, fullPath);
      } catch (error) {
        return includeOption;
      }
    });
  }

  return data;
};

type FileDataType = {
  title?: string;
  account?: string;
  modifiedDate?: string;
  lastAuthor?: string;
};

export const getMdxFileData = (
  filePath: string,
): {
  content: string;
  data: FileDataType;
} => {
  try {
    const source = fs.readFileSync(filePath);
    const { content: rawContent, data } = matter(source);
    const content = insertRelatedFiles(rawContent, filePath);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [match, mtime, lastAuthor] =
      execSync(`git log -1 --pretty=format:'%aI %an' "${filePath}"`)
        .toString()
        .trim()
        .match(/(\S+) (\S.+)/) || [];

    const modifiedDate = dateFormat(mtime, 'mmm d yyyy');
    const newData: FileDataType = {
      ...data,
      lastAuthor,
      modifiedDate,
    };

    return { content, data: newData };
  } catch (error) {
    return { content: '', data: {} };
  }
};
