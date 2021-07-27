import { NextPage } from 'next';
import { datadogRum } from '@datadog/browser-rum';

import { ThemeProvider } from 'theme/ThemeProvider';
import MainLayout from 'components/MainLayout';
import useAppInitState from 'hooks/useAppInitState';
import Head from 'components/Head';

import GlobalStyles from '../styles/globalStyles';

type Props = {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  Component?: any;
  pageProps?: any;
};

const MyApp: NextPage<Props> = ({ Component, pageProps }) => {
  const { sidebarDocLinks, headerContent, footerContent } = useAppInitState();

  return (
    <ThemeProvider>
      <GlobalStyles />
      <Head />
      <MainLayout
        navTreeLinks={sidebarDocLinks}
        headerContent={headerContent}
        footerContent={footerContent}
      >
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
};

datadogRum.init({
  applicationId: String(process.env.NEXT_PUBLIC_RUM_APPLICATION_ID),
  clientToken: String(process.env.NEXT_PUBLIC_RUM_CLIENT_TOKEN),
  site: 'datadoghq.com',
  service: 'cko-docs',
  version: String(process.env.NEXT_PUBLIC_APP_VERSION),
  sampleRate: 100,
  trackInteractions: false,
});

export default MyApp;
