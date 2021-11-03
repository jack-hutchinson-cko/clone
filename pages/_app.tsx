import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { datadogRum } from '@datadog/browser-rum';
import withLDProvider from 'hoc/withLDProvider';
import { ThemeProvider } from 'theme/ThemeProvider';
import Head from 'components/Head';
import withHandlerBackButton from 'hoc/withHandlerBackButton';
import GlobalStyles from '../styles/globalStyles';

type Props = {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  Component?: any;
  pageProps?: any;
};

const MyApp: NextPage<AppProps<Props>> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Head />
      <GlobalStyles />
      <Component {...pageProps} />
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
