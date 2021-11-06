import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { datadogLogs } from '@datadog/browser-logs';
import { datadogRum } from '@datadog/browser-rum';
import withLDProvider from 'src/hoc/withLDProvider';
import { ThemeProvider } from 'src/theme/ThemeProvider';
import Head from 'src/components/Head';
import withHandlerBackButton from 'src/hoc/withHandlerBackButton';
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

datadogLogs.init({
  clientToken: String(process.env.NEXT_PUBLIC_RUM_CLIENT_TOKEN),
  site: 'datadoghq.com',
  service: 'cko-docs',
  forwardErrorsToLogs: true,
  sampleRate: 100,
});

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
