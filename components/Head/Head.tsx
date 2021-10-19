import { FC } from 'react';
import Head from 'next/head';

import { basePathAddition } from '../../tools/basePathAddition';
import GoogleTags from './Trackers/GoogleTags';
import Boomerang from './Trackers/Boomerang';
import HeapIO from './Trackers/HeapIO';
import HotJar from './Trackers/HotJar';
import NoticeableWidget from './WhatsNew/NoticeableWidget';

import OneTrustCookie from './Cookies/OneTrustCookie';

type PageHeadProps = {
  isHeadlessMode?: boolean;
};

type PureHeadProps = {
  title?: string;
};

const PageHead: FC<PageHeadProps> = ({ isHeadlessMode }) => {
  const faviconSrc = basePathAddition('/favicon.ico');
  const isNAS = process.env.NEXT_PUBLIC_CLIENT_TYPE === 'NAS';
  return (
    <Head>
      {!isHeadlessMode && false && <OneTrustCookie id={process.env.NEXT_PUBLIC_ONE_TRUST_ID} />}
      <title>Checkout.com - Docs</title>
      <link rel="shortcut icon" href={faviconSrc} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      {isNAS && <meta name="robots" content="noindex" />}
      <link
        rel="preload"
        href={basePathAddition('/assets/fonts/Graphik-Light-Cy-Gr-Web.woff2')}
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href={basePathAddition('/assets/fonts/Graphik-Regular-Web.woff2')}
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href={basePathAddition('/assets/fonts/Graphik-Medium-Web.woff2')}
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href={basePathAddition('/assets/fonts/Graphik-Semibold-Cy-Gr-Web.woff2')}
        as="font"
        crossOrigin=""
      />
      <script src="https://cdn.checkout.com/js/framesv2.min.js" />
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
};

export const PureHead: FC<PureHeadProps> = ({ title = 'Checkout.com' }) => (
  <Head>
    <title>{title} - Docs</title>
  </Head>
);

export default PageHead;
