import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

const withHandlerBackButton = <T,>(Component: FC<T>): FC<T> => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      window.onpopstate = () => {
        router.push(document.location);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <Component {...props} />;
  };
};

export default withHandlerBackButton;
