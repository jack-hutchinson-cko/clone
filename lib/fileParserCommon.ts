/* eslint-disable no-restricted-syntax */
import fs from 'fs';
import { execSync } from 'child_process';
import { last, lowerCase } from 'lodash';
import matter from 'gray-matter';
import dateFormat from 'dateformat';

type ForEachFileTreeParams = {
  parentFilePath: string;
  parentPath: string;
  parentArticles?: string[];
  breadcrumbs?: { url: string; title: string }[];
};

export type ForEachTreeCallBackParamsType = {
  title: string;
  path: string;
  filePath: string;
  parentArticles: string[];
  breadcrumbs: { url: string; title: string }[];
};

type GetMdxFileDataOptions = {
  addGitInfo?: boolean;
};

export const getAnchors = (content: string): string[] => content.match(/^(#|##) (.*$)/gim) || [];

export const getTitleFromFileName = (fileName: string): string => fileName.replace(/^[0-9]+ /, '');
export const getSlugFromTitle = (title: string): string => lowerCase(title).replace(/ /g, '-');

export const isMdxSourceFolder = (filePath: string): boolean => {
  const fileName = last(filePath.split('/')) || '';

  return fs.statSync(filePath).isDirectory() && fileName.charAt(0) !== '_';
};

export const forEachFileTree = (
  { parentFilePath, parentPath, parentArticles = [], breadcrumbs = [] }: ForEachFileTreeParams,
  callBack: (params: ForEachTreeCallBackParamsType) => void | boolean,
): void => {
  const children = fs.readdirSync(parentFilePath);

  for (const child of children) {
    const filePath = `${parentFilePath}/${child}`;

    if (isMdxSourceFolder(filePath)) {
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

const code = '```';
const codeWithParams = ({ language }: { language: string }): string =>
  `${code}${language} isCollapsible="false", withBorder="false", withControls="false"`;

const getFolderPath = (filePath: string): string =>
  filePath.slice(0, filePath.lastIndexOf('/') + 1);

const getIBuilderCodeTab = ({
  folderPath,
  sourcePath,
}: {
  folderPath: string;
  sourcePath?: string;
}): string => {
  if (!sourcePath) {
    return '';
  }

  try {
    const fullPath = `${folderPath}${sourcePath}`;
    const children = fs.readdirSync(fullPath);

    return children.reduce((result, child) => {
      const extension = last(child.split('.')) || '';

      return `${result}\n\n<IBuilderCodeTab title="${child}">\n\n${codeWithParams({
        language: extension,
      })}\ninclude('${sourcePath}/${child}')\n${code}\n\n</IBuilderCodeTab>\n`;
    }, '');
  } catch (error) {
    return '';
  }
};

const getIBuilderFrameworkTab = ({ folderPath }: { folderPath: string }): string => {
  try {
    const frameWorkFolderPath = `${folderPath}_frameworks`;
    const children = fs.readdirSync(frameWorkFolderPath);

    return children.reduce((result, child) => {
      if (child.indexOf('.mdx') !== -1) {
        const [frontEnd, backEnd] = child.replace('.mdx', '').split('-');
        return `${result}\n\n<IBuilderFrameworkTab frontEnd="${frontEnd}" backEnd="${backEnd}">\n\ninclude('_frameworks/${child}')\n\n</IBuilderFrameworkTab>\n`;
      }

      return result;
    }, '');
  } catch (error) {
    return '';
  }
};

type ContentParsingType = {
  content: string;
  frontMatter: { [key: string]: string };
  filePath: string;
};

const addIncludeOptionByFileType = ({
  content,
  frontMatter,
  filePath,
}: ContentParsingType): string => {
  const folderPath = getFolderPath(filePath);

  if (frontMatter.type === 'IBuilder') {
    return `${content}${getIBuilderFrameworkTab({ folderPath })}`;
  }

  if (frontMatter.type === 'IBuilderFrameworksTab') {
    const { frontendSource, backendSource } = frontMatter;
    return `${content}${getIBuilderCodeTab({
      folderPath,
      sourcePath: frontendSource,
    })}${getIBuilderCodeTab({
      folderPath,
      sourcePath: backendSource,
    })}`;
  }

  return content;
};

const wrapContentByFileType = ({
  content,
  frontMatter,
}: Omit<ContentParsingType, 'filePath'>): string => {
  if (frontMatter.type === 'IBuilder') {
    return `<IBuilder>\n\n${content}\n\n</IBuilder>`;
  }

  return content;
};

const prepareDataByType = ({ content, filePath, frontMatter }: ContentParsingType) => {
  const data = addIncludeOptionByFileType({ content, frontMatter, filePath });

  return wrapContentByFileType({ content: data, frontMatter });
};

const readInnerFile = (fullPath: string) => {
  if (fullPath.indexOf('.mdx') !== -1) {
    const source = fs.readFileSync(fullPath);
    return matter(source);
  }

  return { content: fs.readFileSync(fullPath, { encoding: 'utf8', flag: 'r' }), data: {} };
};

const insertRelatedFiles = ({ content, filePath, frontMatter }: ContentParsingType): string => {
  const data = prepareDataByType({ content, filePath, frontMatter });

  const reg = RegExp(/include\('[^']*'\)/g);

  if (reg.test(data)) {
    return data.replace(reg, (includeOption: string) => {
      try {
        const fileRelativePath = includeOption.slice(9, includeOption.length - 2);
        const fullPath = `${getFolderPath(filePath)}${fileRelativePath}`;
        const { content: childContent, data: childFrontMatter } = readInnerFile(fullPath);

        return insertRelatedFiles({
          content: childContent,
          filePath: fullPath,
          frontMatter: childFrontMatter,
        });
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
  previewIcon?: string;
  previewIconDark?: string;
  description?: string;
};

export const getMdxFileData = (
  filePath: string,
  options: GetMdxFileDataOptions = { addGitInfo: true },
): {
  content: string;
  data: FileDataType;
} => {
  try {
    const source = fs.readFileSync(filePath);
    const { content: rawContent, data } = matter(source);

    const content = insertRelatedFiles({
      content: rawContent,
      filePath,
      frontMatter: data,
    });

    if (options.addGitInfo) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [match, mtime, lastAuthor] =
        execSync(`git log -1 --pretty=format:'%aI %an' "${filePath}"`)
          .toString()
          .trim()
          .match(/(\S+) (\S.+)/) || [];
      const newData: FileDataType = {
        ...data,
        lastAuthor,
        modifiedDate: dateFormat(mtime, 'mmm d yyyy'),
      };

      return { content, data: newData };
    }
    return { content, data };
  } catch (error) {
    return { content: '', data: {} };
  }
};

const sectionReg = RegExp(/<FAQItem (.|\n)*?>(.|\n)*?<\/FAQItem>/g);
const regStartTag = RegExp(/<FAQItem (.|\n)*?>/i);
const regEndTag = RegExp(/<\/FAQItem>/i);
const regTagProperty = RegExp(/(\S+)=["]?((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"]))+.)["']?/g);

export const getFAQItems = (mdxContent: string): string[] => mdxContent.match(sectionReg) || [];

export const getFAQItemBody = (faqItem: string): string =>
  faqItem.replace(regStartTag, '').replace(regEndTag, '');

export const getFAQHeaderProperty = (faqItem: string): { [key: string]: string } => {
  const header = (faqItem.match(regStartTag) || [])[0];

  return (header.match(regTagProperty) || []).reduce((result, property) => {
    if (property.includes('title')) {
      return {
        ...result,
        title: property.slice(7, property.length - 1),
      };
    }
    if (property.includes('popularity')) {
      return {
        ...result,
        popularity: property.slice(12, property.length - 1),
      };
    }

    return result;
  }, {});
};
