/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import ErrorPageComponent from 'src/components/ErrorPage';
import withMainLayout from 'src/hoc/withMainLayout';
import { getDocsSidebarDocLinks } from 'src/lib/fileParser';

const ErrorPage: NextPage = () => {
  useEffect(() => {
    console.log('Error - 404.js');
  }, []);

  return <ErrorPageComponent statusCode={404} />;
};

export default withMainLayout(ErrorPage);

export const getStaticProps: GetStaticProps = async (context) => {
  // @ts-ignore
  context.statusCode = 404;
  console.log('Error - 404.js');
  const sidebarDocLinks = getDocsSidebarDocLinks();

  return {
    props: {
      sidebarDocLinks,
    },
  };
};
