/* eslint-disable react/no-danger */
import { FC } from 'react';
import Head from 'next/head';

type HeadProps = {
  title?: string;
};

const PageHead: FC<HeadProps> = ({ title = 'Checkout.com' }) => (
  <Head>
    <title>{title} - Docs</title>
  </Head>
);

export default PageHead;
