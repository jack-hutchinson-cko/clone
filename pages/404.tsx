/* eslint-disable @typescript-eslint/ban-ts-comment */
import { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';
import ErrorPageComponent from 'src/components/ErrorPage';

const ErrorPage: NextPage = () => {
  useEffect(() => {
    console.log('Error - 404.js');
  }, []);

  return <ErrorPageComponent statusCode={404} />;
};

export default ErrorPage;

const getLinks = () => {}; // external function 

export const getStaticProps: GetStaticProps = async (context) => {
  // @ts-ignore
  context.statusCode = 404;
  console.log('Error - 404.js');

  return {
    props: {
      // add props here
    },
  };
};
