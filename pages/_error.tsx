import { NextPage } from 'next';
import ErrorPageComponent from 'components/ErrorPage';

type Props = {
  statusCode?: number;
};

const ErrorPage: NextPage<Props> = ({ statusCode }) => (
  <ErrorPageComponent statusCode={statusCode} />
);

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = (res && res.statusCode) || (err && err.statusCode) || 404;
  return { statusCode };
};

export default ErrorPage;
