import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

import { PureHead as Head } from 'components/Head';
import MDXProvider from 'components/MDXProvider';
import BreadCrumbs from 'components/BreadCrumbs';
import AnchorsProvider from 'components/AnchorsProvider';
import AnchorNavigation from 'components/AnchorNavigation';
import Card from 'components/Card';
import CardWrapper from 'components/CardWrapper';
import LastChange from 'components/LastChange';
import TimeToComplete from 'components/TimeToComplete';
import WarningMessage from 'components/WarningMessage';

import {
  getFileNameFromPath,
  getDocArticleData,
  getDocsPathUrl,
  getBreadCrumbsItem,
  getChildrenArticle,
} from 'lib/fileParser';

import { DocPostProps } from 'types/docpage';
import withErrorPage from 'hoc/withErrorPage';
import withFeatureFlag from 'hoc/withFeatureFlag';
import { PageContent, Title, Navigation, FrontMatterContainer } from '../../styles/index.styles';

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
              <Title>{title}</Title>
              {timeToComplete && warningMessage && (
                <FrontMatterContainer>
                  <TimeToComplete time={timeToComplete} />
                  <WarningMessage message={warningMessage} />
                </FrontMatterContainer>
              )}
              <LastChange>
                Last updated: {modifiedDate} by {lastAuthor}
              </LastChange>
            </>
          ) : null}
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

export default withFeatureFlag(withErrorPage(DocPost));

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
