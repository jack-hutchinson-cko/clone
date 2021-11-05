import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

import Head from 'src/components/Head';
import MDXProvider from 'src/components/MDXProvider';
import BreadCrumbsDefault from 'src/components/BreadCrumbs';
import AnchorsProvider from 'src/components/AnchorsProvider';
import AnchorNavigation from 'src/components/AnchorNavigation';
import Card from 'src/components/Card';
import CardWrapper from 'src/components/CardWrapper';
import LastChange from 'src/components/LastChange';
import TimeToComplete from 'src/components/TimeToComplete';
import WarningMessage from 'src/components/WarningMessage';
import { MdxTextHeadingOne } from 'src/components/TextHeading';
import withBlockBottomMargin from 'src/hoc/withBlockBottomMargin';
import { spacing } from 'src/constants/spacingSize';
import withMainLayout from 'src/hoc/withMainLayout';

import {
  getFileNameFromPath,
  getDocArticleData,
  getDocsPathUrl,
  getBreadCrumbsItem,
  getChildrenArticle,
  getDocsSidebarDocLinks,
} from 'src/lib/fileParser';

import { DocPostProps } from 'src/types/docpage';
import withErrorPage from 'src/hoc/withErrorPage';
import withFeatureFlag from 'src/hoc/withFeatureFlag';
import {
  PageContent,
  Navigation,
  FrontMatterContainer,
  ChildArticlesWrapper,
} from '../../styles/index.styles';

const BreadCrumbs = withBlockBottomMargin(BreadCrumbsDefault, { spacing: spacing.s60 });

const MIN_ANCHOR_COUNT = 2;

const ChildArticlesPerRow = {
  desktop: 2,
  mobile: 1,
};

const DocPost: NextPage<DocPostProps> = ({
  breadCrumbsItem,
  anchorsNavItems,
  frontMatter,
  source,
  childrenArticles,
  isIntegrationBuilder,
  showAuthorSection,
}) => {
  const { title, timeToComplete, warningMessage, modifiedDate, lastAuthor } = frontMatter;
  return (
    <AnchorsProvider>
      <Head title={frontMatter.title} />
      <PageContent isIntegrationBuilder={isIntegrationBuilder} id="main">
        <header>
          <BreadCrumbs breadCrumbsItem={breadCrumbsItem} />
          {!isIntegrationBuilder ? (
            <>
              <MdxTextHeadingOne>{title}</MdxTextHeadingOne>
              {timeToComplete && warningMessage && (
                <FrontMatterContainer>
                  <TimeToComplete time={timeToComplete} />
                  <WarningMessage message={warningMessage} />
                </FrontMatterContainer>
              )}
              {showAuthorSection && (
                <LastChange>
                  Last updated: {modifiedDate} by {lastAuthor}
                </LastChange>
              )}
            </>
          ) : null}
        </header>
        <MDXProvider source={source} />
        {!!childrenArticles.length && (
          <ChildArticlesWrapper>
            <CardWrapper cardsInRow={ChildArticlesPerRow}>
              {childrenArticles.map((childItem) => (
                <Card withAnchor href={childItem.href} title={childItem.title} key={childItem.href}>
                  {childItem.description}
                </Card>
              ))}
            </CardWrapper>
          </ChildArticlesWrapper>
        )}
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

export default withFeatureFlag(withErrorPage(withMainLayout(DocPost)));

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

  const sidebarDocLinks = getDocsSidebarDocLinks();

  return {
    props: {
      breadCrumbsItem,
      anchorsNavItems,
      frontMatter,
      source,
      childrenArticles,
      isIntegrationBuilder: frontMatter.type === 'IBuilder',
      showAuthorSection: !childrenArticles.length,
      sidebarDocLinks,
    },
  };
};
