import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from 'components/Head';
import MDXProvider from 'components/MDXProvider';
import BreadCrumbs from 'components/BreadCrumbs';
import AnchorsProvider from 'components/AnchorsProvider';
import AnchorNavigation from 'components/AnchorNavigation';
import { BreadCrumbsItems } from 'types/content';
import Card from 'components/Card';
import CardWrapper from 'components/CardWrapper';
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

const MIN_ANCHOR_COUNT = 2;

const ChildArticlesPerRow = {
  desktop: 2,
  mobile: 1,
};

const DocPost: NextPage<Props> = ({
  breadCrumbsItem,
  anchorsNavItems,
  frontMatter,
  source,
  childrenArticles,
}) => {
  return (
    <AnchorsProvider>
      <Head title={frontMatter.title} />
      <PageContent>
        <header>
          <BreadCrumbs breadCrumbsItem={breadCrumbsItem} />
          <Title>{frontMatter.title}</Title>
        </header>
        <MDXProvider source={source} />
        <CardWrapper cardsInRow={ChildArticlesPerRow}>
          {childrenArticles.map((childItem) => (
            <Card withAnchor href={childItem.href} title={childItem.title} key={childItem.href}>
              {childItem.description}
            </Card>
          ))}
        </CardWrapper>
      </PageContent>
      <Navigation>
        {anchorsNavItems.length < MIN_ANCHOR_COUNT ? null : (
          <AnchorNavigation anchors={anchorsNavItems} />
        )}
      </Navigation>
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
