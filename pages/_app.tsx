import { NextPage } from 'next';
import { ThemeDefaultProvider } from '@cko/primitives';
import MainLayout from 'components/MainLayout';

import { NavTreeElement } from 'types/navTree';
import { HeaderLink } from 'types/header';
import { getSidebarDocLinks } from 'lib/docsItems';
import { getHeaderContent } from 'lib/headerContent';
import { defaultTheme } from 'constants/theme';

import '../styles/globals.scss';

type Props = {
  sidebarDocLinks: NavTreeElement[];
  headerGuidesLinks: HeaderLink[];
  Component?: any;
  pageProps?: any;
};

const MyApp: NextPage<Props> = ({ sidebarDocLinks, headerGuidesLinks, Component, pageProps }) => {
  return (
    <ThemeDefaultProvider theme={defaultTheme}>
      <MainLayout navTreeLinks={sidebarDocLinks} headerGuidesLinks={headerGuidesLinks}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeDefaultProvider>
  );
};

MyApp.getInitialProps = async () => {
  const sidebarDocLinks = await getSidebarDocLinks();
  const { guides } = await getHeaderContent();
  return { sidebarDocLinks, headerGuidesLinks: guides };
};

export default MyApp;
