import { NextPage } from 'next';
import { ThemeDefaultProvider } from '@cko/primitives';
import MainLayout from 'components/MainLayout';
import { defaultTheme } from 'constants/theme';
import useAppInitState from 'hooks/useAppInitState';
import GlobalStyle from '../styles/globalStyles';

type Props = {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  Component?: any;
  pageProps?: any;
};

const MyApp: NextPage<Props> = ({ Component, pageProps }) => {
  const { sidebarDocLinks, headerContent } = useAppInitState();

  return (
    <ThemeDefaultProvider theme={defaultTheme}>
      <GlobalStyle />
      <MainLayout navTreeLinks={sidebarDocLinks} headerContent={headerContent}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeDefaultProvider>
  );
};

export default MyApp;
