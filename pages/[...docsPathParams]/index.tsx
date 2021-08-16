import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

import Head from 'components/Head';
import MDXProvider from 'components/MDXProvider';
import BreadCrumbs from 'components/BreadCrumbs';
import AnchorsProvider from 'components/AnchorsProvider';
import AnchorNavigation from 'components/AnchorNavigation';
import { BreadCrumbsItems } from 'types/content';
import { AnchorItem } from 'types/anchors';
import Card from 'components/Card';
import CardWrapper from 'components/CardWrapper';
import LastChange from 'components/LastChange';
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
    modifiedDate: string;
    lastAuthor: string;
  };
  source: MDXRemoteSerializeResult;
  anchorsNavItems: AnchorItem[];
  childrenArticles: { title: string; href: string; description: string }[];
  isIntegrationBuilder: boolean;
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
  isIntegrationBuilder,
}) => {
  return (
    <AnchorsProvider>
      <Head title={frontMatter.title} />
      <PageContent isIntegrationBuilder={isIntegrationBuilder}>
        {!isIntegrationBuilder ? (
          <header>
            <BreadCrumbs breadCrumbsItem={breadCrumbsItem} />
            <Title>{frontMatter.title}</Title>
            <LastChange>
              {frontMatter.modifiedDate} – {frontMatter.lastAuthor}
            </LastChange>
          </header>
        ) : null}
        <MDXProvider source={source} />
        <CardWrapper cardsInRow={ChildArticlesPerRow}>
          {childrenArticles.map((childItem) => (
            <Card withAnchor href={childItem.href} title={childItem.title} key={childItem.href}>
              {childItem.description}
            </Card>
          ))}
        </CardWrapper>
      </PageContent>
      {!isIntegrationBuilder ? (
        <Navigation>
          {anchorsNavItems.length < MIN_ANCHOR_COUNT ? null : (
            <AnchorNavigation anchors={anchorsNavItems} />
          )}
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
  });

  return {
    props: {
      breadCrumbsItem,
      anchorsNavItems,
      frontMatter,
      source,
      childrenArticles,
      isIntegrationBuilder: frontMatter.type === 'IBuilder',
    },
  };
};
