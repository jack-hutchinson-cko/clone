import { FC, ReactNode } from 'react';
import ErrorPage from 'components/ErrorPage';

export type WithErrorPageProps = {
  isRedirectToErrorPage: boolean;
  statusCode?: number;
  children: ReactNode;
};

const withErrorPage = <T,>(Component: FC<T>): FC<WithErrorPageProps & T> => {
  return (props) => {
    const {
      isRedirectToErrorPage,
      statusCode = 404,
      children,
      ...rest
    } = props as WithErrorPageProps;
    if (isRedirectToErrorPage) return <ErrorPage statusCode={statusCode} />;
    return <Component {...(rest as T)}>{children}</Component>;
  };
};

export default withErrorPage;
