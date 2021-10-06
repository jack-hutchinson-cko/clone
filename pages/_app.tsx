import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { datadogRum } from '@datadog/browser-rum';
import withLDProvider from 'hoc/withLDProvider';
import withHeadlessMode from 'hoc/withHeadlessMode';
import { ThemeProvider } from 'theme/ThemeProvider';
import useAppInitState from 'hooks/useAppInitState';
import Head from 'components/Head';
import NASBanner from 'components/NASBanner';
import MainLayout, { Props as LayoutProps } from 'components/MainLayout';
import { clientSettings } from 'constants/clientSettings';
import withHandlerBackButton from 'hoc/withHandlerBackButton';

import GlobalStyles from '../styles/globalStyles';

const Layout = withHeadlessMode<LayoutProps>(MainLayout);

type Props = {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  Component?: any;
  pageProps?: any;
};

const MyApp: NextPage<AppProps<Props>> = ({ Component, pageProps }) => {
  const { headlessMode, isFAQSection, ...restPageProps } = pageProps;
  const { sidebarDocLinks, headerContent, footerContent } = useAppInitState();

  return (
    <ThemeProvider>
      <Head isHeadlessMode={headlessMode} />
      <GlobalStyles />
      {clientSettings.NASBannerShown && <NASBanner />}
      <Layout
        navTreeLinks={sidebarDocLinks}
        headerContent={headerContent}
        footerContent={footerContent}
        isHeadlessMode={headlessMode}
        isFAQSection={isFAQSection}
      >
        <Component {...restPageProps} />
      </Layout>
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

export default withLDProvider(withHandlerBackButton(MyApp));
