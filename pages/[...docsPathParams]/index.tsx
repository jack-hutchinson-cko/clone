import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useMatchMedia } from '@cko/primitives';

import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXProvider from 'components/MDXProvider';
import { Breakpoints } from 'constants/screen';
import BreadCrumbs from 'components/BreadCrumbs';
import AnchorsProvider from 'components/AnchorsProvider';
import AnchorNavigation from 'components/AnchorNavigation';
import { BreadCrumbsItems } from 'types/content';
import ChildDocArticles from 'components/ChildDocArticles';
import {
  getFileNameFromPath,
  getDocArticleData,
  getDocsPathUrl,
  getBreadCrumbsItem,
  getChildrenArticle,
} from 'lib/fileParser';

import { PageContent, Title, Navigation } from '../../styles/index.styles';

type Props = {
  breadCrumbsItem: BreadCrumbsItems;
  frontMatter: {
    title: string;
  };
  source: MDXRemoteSerializeResult;
  anchorsNavItems: { title: string; href: string }[];
  childrenArticles: { title: string; href: string; description: string }[];
};

const DocPost: NextPage<Props> = ({
  breadCrumbsItem,
  anchorsNavItems,
  frontMatter,
  source,
  childrenArticles,
}) => {
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  return (
    <AnchorsProvider>
      <PageContent>
        <header>
          <BreadCrumbs breadCrumbsItem={breadCrumbsItem} />
          <Title>{frontMatter.title}</Title>
        </header>
        <MDXProvider source={source} />
        <ChildDocArticles childrenArticles={childrenArticles} isMobile={isMobile} />
      </PageContent>
      {!isMobile && anchorsNavItems.length ? (
        <Navigation>
          <AnchorNavigation anchors={anchorsNavItems} />
        </Navigation>
      ) : null}
    </AnchorsProvider>
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
  const breadCrumbsItem = getBreadCrumbsItem(docsPathParams as string[]);
  const filePath = getFileNameFromPath(docsPathParams as string[]);
  const childrenArticles = getChildrenArticle(filePath, docsPathParams as string[]);
  const { anchorsNavItems, frontMatter, source } = await getDocArticleData({
    filePath,
    childrenArticles,
  });

  return {
    props: {
      breadCrumbsItem,
      anchorsNavItems,
      frontMatter,
      source,
      childrenArticles,
    },
  };
};
