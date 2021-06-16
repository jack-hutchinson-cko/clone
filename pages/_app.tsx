import { NextPage } from 'next';
import { ThemeDefaultProvider } from '@cko/primitives';
import MainLayout from 'components/MainLayout';

import { NavTreeElement } from 'types/navTree';
import { HeaderContent } from 'types/header';
import { getSidebarDocLinks } from 'lib/docsItems';
import { getHeaderContent } from 'lib/headerContent';
import { defaultTheme } from 'constants/theme';
import GlobalStyle from '../styles/globalStyles';

type Props = {
  sidebarDocLinks: NavTreeElement[];
  headerContent: HeaderContent;
  Component?: any;
  pageProps?: any;
};

const MyApp: NextPage<Props> = ({ sidebarDocLinks, headerContent, Component, pageProps }) => {
  return (
    <ThemeDefaultProvider theme={defaultTheme}>
      <GlobalStyle />
      <MainLayout navTreeLinks={sidebarDocLinks} headerContent={headerContent}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeDefaultProvider>
  );
};

MyApp.getInitialProps = async () => {
  const sidebarDocLinks = await getSidebarDocLinks();
  const headerContent = await getHeaderContent();
  return { sidebarDocLinks, headerContent };
};

export default MyApp;
