/* eslint-disable react/no-danger */
import { FC } from 'react';
import Head from 'next/head';

type PureHeadProps = {
  title?: string;
};

const PageHead: FC = () => (
  <Head>
    <title>Checkout.com - Docs</title>
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

export const PureHead: FC<PureHeadProps> = ({ title = 'Checkout.com' }) => (
  <Head>
    <title>{title} - Docs</title>
  </Head>
);

export default PageHead;
