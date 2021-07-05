import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useMatchMedia } from '@cko/primitives';

import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import MDXProvider from 'components/MDXProvider';
import { Breakpoints } from 'constants/screen';
import BreadCrumbs from 'components/BreadCrumbs';
import AnchorsProvider from 'components/AnchorsProvider';
import AnchorNavigation from 'components/AnchorNavigation';
import { BreadCrumbsItems } from 'types/content';
import {
  getFileNameFromPath,
  getDocArticleData,
  getDocsPathUrl,
  getBreadCrumbsItem,
} from 'lib/fileParser';

import { PageContent, Title, Navigation } from '../../styles/index.styles';

type Props = {
  breadCrumbsItem: BreadCrumbsItems;
  frontMatter: {
    title: string;
  };
  source: MDXRemoteSerializeResult;
  anchorsNavItems: { title: string; href: string }[];
};

const DocPost: NextPage<Props> = ({ breadCrumbsItem, anchorsNavItems, frontMatter, source }) => {
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  return (
    <AnchorsProvider>
      <PageContent>
        <header>
          <BreadCrumbs breadCrumbsItem={breadCrumbsItem} />
          <Title>{frontMatter.title}</Title>
        </header>
        <MDXProvider source={source} />
      </PageContent>
      {!isMobile && (
        <Navigation>
          <AnchorNavigation anchors={anchorsNavItems} />
        </Navigation>
      )}
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
  const { docsPathParams = [] as string[] } = params;
  const breadCrumbsItem = getBreadCrumbsItem(docsPathParams as string[]);
  const filePath = getFileNameFromPath(docsPathParams as string[]);
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
