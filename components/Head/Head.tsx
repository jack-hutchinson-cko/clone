import { FC } from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
};

const PageHead: FC<Props> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
  </Head>
);

PageHead.defaultProps = {
  title: 'Checkout.com - Docs',
};

export default PageHead;
