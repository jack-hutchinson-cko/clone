import { last } from 'lodash';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXProvider from 'components/MDXProvider';
import { TextHeadingOne } from 'components/TextHeading';
import { getDocsPathUrl, getPostByUrlId } from 'lib/docsItems';
import BreadCrumbs from 'components/BreadCrumbs';
import AnchorNavigation from 'components/AnchorNavigation';
import { BreadCrumbsItems } from 'types/content';
import { getFileNameFromPath, getDocArticleData } from 'lib/fileParser';
import styles from './docPost.module.scss';

type Props = {
  breadCrumbsItem: BreadCrumbsItems;
  frontMatter: {
    title: string;
  };
  source: MDXRemoteSerializeResult;
  anchorsNavItems: { title: string; href: string }[];
};

const DocPost: NextPage<Props> = ({ breadCrumbsItem, anchorsNavItems, frontMatter, source }) => {
  return (
    <div className={styles.mainWrapper}>
      <article className={styles.content}>
        <header>
          <BreadCrumbs breadCrumbsItem={breadCrumbsItem} />
          <TextHeadingOne className={styles.title}>{frontMatter.title}</TextHeadingOne>
        </header>
        <MDXProvider source={source} />
      </article>
      <div className={styles.navigation}>
        <AnchorNavigation anchors={anchorsNavItems} />
      </div>
    </div>
  );
};

export default DocPost;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getDocsPathUrl(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { docsPathParams = [] } = params;
  const targetUrl = last(docsPathParams) || '';
  const { name, url, parentsNodes = [] } = getPostByUrlId(targetUrl) || {};
  const breadCrumbsItem = [
    ...parentsNodes.map((item) => ({ name: item.name, url: item.url })),
    { name, url },
  ];

  const filePath = getFileNameFromPath();
  const { anchorsNavItems, frontMatter, source } = await getDocArticleData({ filePath });

  return {
    props: {
      breadCrumbsItem,
      anchorsNavItems,
      frontMatter,
      source,
    },
  };
};
