import { GetStaticProps, NextPage } from 'next';
import ErrorPageComponent from 'components/ErrorPage';
import withMainLayout from 'hoc/withMainLayout';
import { getDocsSidebarDocLinks } from 'lib/fileParser';

const ErrorPage: NextPage = () => <ErrorPageComponent statusCode={404} />;

export default withMainLayout(ErrorPage);

export const getStaticProps: GetStaticProps = async () => {
  const sidebarDocLinks = getDocsSidebarDocLinks();

  return {
    props: {
      sidebarDocLinks,
    },
  };
};
