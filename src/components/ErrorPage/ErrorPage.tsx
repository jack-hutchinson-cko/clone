import { FC } from 'react';
import Link from 'next/link';

type Props = {
  statusCode?: number;
};

const ErrorPage: FC<Props> = ({ statusCode }) => {
  let errorMessage: JSX.Element;
  let headerCopy: string | null;
  const docsImgUrl = '/errorPage/docs.svg';
  const apiRefImgUrl = '/errorPage/api.svg';
  const apiReferenceLink =
    process.env.NEXT_PUBLIC_CLIENT_TYPE === 'ABC'
      ? 'https://api-reference.checkout.com/'
      : 'https://api-reference.checkout.com/preview/crusoe';

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
    <div>
      <h1>{statusCode}</h1>
      <h2>{headerCopy}</h2>
      <p className="error-message">{errorMessage}</p>
      <div>
        <Link imageUrl={docsImgUrl} url="/">
          Go to Docs home
        </Link>
        <Link imageUrl={apiRefImgUrl} url={apiReferenceLink}>
          Go to API reference
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
