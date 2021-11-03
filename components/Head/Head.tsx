import { FC } from 'react';
import Head from 'next/head';

import { basePathAddition } from '../../tools/basePathAddition';
import GoogleTags from './Trackers/GoogleTags';
import Boomerang from './Trackers/Boomerang';
import HeapIO from './Trackers/HeapIO';
import NoticeableWidget from './WhatsNew/NoticeableWidget';

import OneTrustCookie from './Cookies/OneTrustCookie';

type PageHeadProps = {
  isHeadlessMode?: boolean;
};

type PureHeadProps = {
  title?: string;
};

const PageHead: FC<PageHeadProps> = ({ isHeadlessMode }) => (
  <Head>
    <title>Checkout.com - Docs</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="robots" content="noindex nofollow" />
    <meta name="description" content="Checkout.com documentation" />
    <link
      rel="preload"
      href={basePathAddition('/assets/fonts/Graphik-Light-Cy-Gr-Web.woff2')}
      as="font"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href={basePathAddition('/assets/fonts/Graphik-Regular-Web.woff2')}
      as="font"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href={basePathAddition('/assets/fonts/Graphik-Medium-Web.woff2')}
      as="font"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href={basePathAddition('/assets/fonts/Graphik-Semibold-Cy-Gr-Web.woff2')}
      as="font"
      crossOrigin="anonymous"
    />
    <link rel="stylesheet" href={basePathAddition('/assets/fonts/add.css')} />
    <link rel="shortcut icon" href={basePathAddition('/favicons/favicon.ico')} />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href={basePathAddition('/favicons/apple-touch-icon-180x180.png')}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href={basePathAddition('/favicons/favicon-32x32.png')}
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href={basePathAddition('/favicons/favicon-16x16.png')}
    />
    <link
      rel="mask-icon"
      href={basePathAddition('/favicons/favicon.32.safari.svg')}
      color="#00122C"
    />
    <link rel="shortcut icon" href={basePathAddition('/favicons/favicon.ico')} />
    <meta name="msapplication-TileColor" content="#00122C" />
    <meta
      name="msapplication-config"
      content="https://www.checkout.com/favicons/browserconfig.xml"
    />
    <script src="https://cdn.checkout.com/js/framesv2.min.js" />
    <Boomerang id={process.env.NEXT_PUBLIC_BOOMERANG_ID} />
    <GoogleTags id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
    <HeapIO
      id={process.env.NEXT_PUBLIC_HEAP_IO_ID}
      account={process.env.NEXT_PUBLIC_HEAP_IO_ACCOUNT}
    />
    <NoticeableWidget />
    {!isHeadlessMode && <OneTrustCookie id={process.env.NEXT_PUBLIC_ONE_TRUST_ID} />}
  </Head>
);

export const PureHead: FC<PureHeadProps> = ({ title = 'Checkout.com' }) => (
  <Head>
    <title>{title} - Docs</title>
  </Head>
);

export default PageHead;
