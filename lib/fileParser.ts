import fs from 'fs';
import path from 'path';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { getAnchorUrl } from './url';

const getAnchorsNavItems = ({ content }: { content: string }) =>
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

export const POSTS_PATH = path.join(process.cwd(), 'posts');
const FILE_NAME = 'example';

export const getFileNameFromPath = (): string => path.join(POSTS_PATH, `${FILE_NAME}.mdx`);
