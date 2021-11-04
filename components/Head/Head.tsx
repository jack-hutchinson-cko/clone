/* eslint-disable react/no-danger */
import { FC } from 'react';
import Head from 'next/head';

type HeadProps = {
  title?: string;
};

const PageHead: FC<HeadProps> = ({ title = 'Checkout.com' }) => (
  <Head>
    <title>{title} - Docs</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="robots" content="noindex nofollow" />
    <meta name="description" content="Checkout.com documentation" />
    <meta name="msapplication-TileColor" content="#00122C" />
    <meta
      name="msapplication-config"
      content="https://www.checkout.com/favicons/browserconfig.xml"
    />
  </Head>
);

export default PageHead;
