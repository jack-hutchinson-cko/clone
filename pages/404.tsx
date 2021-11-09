import { GetStaticProps, NextPage } from 'next';
import ErrorPageComponent from 'src/components/ErrorPage';
import withMainLayout from 'src/hoc/withMainLayout';
import { getDocsSidebarDocLinks } from 'src/lib/fileParser';

const ErrorPage: NextPage = () => <ErrorPageComponent statusCode={404} />;

export default withMainLayout(ErrorPage);

export const getStaticProps: GetStaticProps = async () => {
  console.log('Error - 404.js');
  const sidebarDocLinks = getDocsSidebarDocLinks();

  return {
    props: {
      sidebarDocLinks,
    },
  };
};
