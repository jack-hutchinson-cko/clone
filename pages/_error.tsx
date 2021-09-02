import { NextPage } from 'next';
import { LinksContainer, Wrapper } from '../styles/errorPage.styles';
import ErrorPageLink from '../components/ErrorPageLink/ErrorPageLink';

type Props = {
  statusCode?: number;
};

const ErrorPage: NextPage<Props> = ({ statusCode }) => {
  let errorMessage: string;

  switch (statusCode) {
    case 404:
      errorMessage = 'Sorry, but the page you are looking to could not be found.';
      break;
    case 503:
      errorMessage = 'Service temporarily unavailable.';
      break;
    default:
      errorMessage = 'An error occured, please try again later.';
  }

  return (
    <Wrapper>
      <h1>{statusCode}</h1>
      <p className="error-message">{errorMessage}</p>
      <LinksContainer>
        <ErrorPageLink imageUrl="/errorPage/docs.svg" url="/">
          Go to Docs home
        </ErrorPageLink>
        <ErrorPageLink imageUrl="/errorPage/api.svg" url="https://api-reference.checkout.com">
          Go to API reference
        </ErrorPageLink>
      </LinksContainer>
    </Wrapper>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = (res && res.statusCode) || (err && err.statusCode) || 404;
  return { statusCode };
};

export default ErrorPage;
