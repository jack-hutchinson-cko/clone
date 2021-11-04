import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

import Head from 'components/Head';
import MDXProvider from 'components/MDXProvider';
import BreadCrumbsDefault from 'components/BreadCrumbs';
import AnchorsProvider from 'components/AnchorsProvider';
import AnchorNavigation from 'components/AnchorNavigation';
import Card from 'components/Card';
import CardWrapper from 'components/CardWrapper';
import LastChange from 'components/LastChange';
import TimeToComplete from 'components/TimeToComplete';
import WarningMessage from 'components/WarningMessage';
import { MdxTextHeadingOne } from 'components/TextHeading';
import withBlockBottomMargin from 'hoc/withBlockBottomMargin';
import { spacing } from 'constants/spacingSize';
import withMainLayout from 'hoc/withMainLayout';

import {
  getFileNameFromPath,
  getDocArticleData,
  getDocsPathUrl,
  getBreadCrumbsItem,
  getChildrenArticle,
  getDocsSidebarDocLinks,
} from 'lib/fileParser';

import { DocPostProps } from 'types/docpage';
import withErrorPage from 'hoc/withErrorPage';
import withFeatureFlag from 'hoc/withFeatureFlag';
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
      <PageContent isIntegrationBuilder={isIntegrationBuilder}>
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
