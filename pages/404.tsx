import { GetStaticProps, NextPage } from 'next';
import ErrorPageComponent from 'components/ErrorPage';
import withMainLayout from 'hoc/withMainLayout';
import { getDocArticleData, getDocsSidebarDocLinks } from 'lib/fileParser';
import { clientSettings } from 'constants/clientSettings';

const ErrorPage: NextPage = () => <ErrorPageComponent statusCode={404} />;

export default withMainLayout(ErrorPage);

export const getStaticProps: GetStaticProps = async () => {
  const { source, frontMatter } = await getDocArticleData({
    filePath: clientSettings.homePagePath,
  });
  const { title, description, getStartedLink } = frontMatter;

  const sidebarDocLinks = getDocsSidebarDocLinks();

  return {
    props: {
      source,
      title,
      description,
      getStartedLink,
      sidebarDocLinks,
    },
  };
};
