import { FC } from 'react';
import ErrorPageLink from 'src/components/ErrorPageLink/ErrorPageLink';
import { basePathAddition } from 'tools/basePathAddition';
import { LinksContainer, Wrapper, StyledHeader, StyledSubHeader } from './ErrorPage.styles';

type Props = {
  statusCode?: number;
};

const ErrorPage: FC<Props> = ({ statusCode }) => {
  let errorMessage: JSX.Element;
  let headerCopy: string | null;
  const docsImgUrl = basePathAddition('/errorPage/docs.svg');
  const apiRefImgUrl = basePathAddition('/errorPage/api.svg');

  switch (statusCode) {
    case 404:
      headerCopy = "We couldn't find the page you requested";
      errorMessage = (
        <>
          This page could have been moved, or no longer exists. <br /> Use the search bar or choose
          from the options below.
        </>
      );
      break;
    case 503:
      headerCopy = "We're having problems with our server";
      errorMessage = (
        // eslint-disable-next-line react/no-unescaped-entities
        <>Try again later. \n We're working on getting back up and running as soon as we can.</>
      );
      break;
    default:
      headerCopy = null;
      errorMessage = <>An error occured, please try again later.</>;
  }

  return (
    <Wrapper>
      <StyledHeader>{statusCode}</StyledHeader>
      <StyledSubHeader>{headerCopy}</StyledSubHeader>
      <p className="error-message">{errorMessage}</p>
      <LinksContainer>
        <ErrorPageLink imageUrl={docsImgUrl} url="/">
          Go to Docs home
        </ErrorPageLink>
        <ErrorPageLink imageUrl={apiRefImgUrl} url="https://api-reference.checkout.com">
          Go to API reference
        </ErrorPageLink>
      </LinksContainer>
    </Wrapper>
  );
};

export default ErrorPage;
