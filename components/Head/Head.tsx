import { FC } from 'react';
import Head from 'next/head';

import GoogleTags from './Trackers/GoogleTags';
import Boomerang from './Trackers/Boomerang';
import HeapIO from './Trackers/HeapIO';
import HotJar from './Trackers/HotJar';
import NoticeableWidget from './ChangeLog/NoticeableWidget';

import OneTrustCookie from './Cookies/OneTrustCookie';

type Props = {
  title?: string;
};

const PageHead: FC<Props> = ({ title = 'Checkout.com' }) => (
  <Head>
    <OneTrustCookie id={process.env.NEXT_PUBLIC_ONE_TRUST_ID} />
    <title>{title} - Docs</title>
    <link rel="shortcut icon" href="/favicon.ico" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link href="/assets/fonts/add.css" rel="stylesheet" />
    <GoogleTags id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
    <Boomerang id={process.env.NEXT_PUBLIC_BOOMERANG_ID} />
    <HeapIO
      id={process.env.NEXT_PUBLIC_HEAP_IO_ID}
      account={process.env.NEXT_PUBLIC_HEAP_IO_ACCOUNT}
    />
    <HotJar id={process.env.NEXT_PUBLIC_HOT_JAR_ID} />
    <OneTrustCookie id={process.env.NEXT_PUBLIC_ONE_TRUST_ID} />
    <NoticeableWidget />
  </Head>
);
export default PageHead;
