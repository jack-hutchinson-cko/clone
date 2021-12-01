import { GetStaticProps } from 'next';

const HomePage = () => {
  return (
      <div>home page</div>
  );
};

export default HomePage;

const externalFunc = () => {}

export const getStaticProps: GetStaticProps = async () => {

  const props = externalFunc();

  return {
    props: {
      props,
    },
  };
};
