import { NextPage } from 'next';

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

export default MyApp;
