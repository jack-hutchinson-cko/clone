import { NextPage } from 'next';
import { ThemeDefaultProvider } from '@cko/primitives';
import MainLayout from 'components/MainLayout';

import { NavTreeElement } from 'types/navTree';
import { HeaderGuid } from 'types/header';
import { getSidebarDocLinks } from 'lib/docsItems';
import { getHeaderContent } from 'lib/headerContent';
import { defaultTheme } from 'constants/theme';

import '../styles/globals.scss';

type Props = {
  sidebarDocLinks: NavTreeElement[];
  headerGuides: HeaderGuid[];
  Component?: any;
  pageProps?: any;
};

const MyApp: NextPage<Props> = ({ sidebarDocLinks, headerGuides, Component, pageProps }) => {
  return (
    <ThemeDefaultProvider theme={defaultTheme}>
      <MainLayout navTreeLinks={sidebarDocLinks} headerGuides={headerGuides}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeDefaultProvider>
  );
};

MyApp.getInitialProps = async () => {
  const sidebarDocLinks = await getSidebarDocLinks();
  const { guides } = await getHeaderContent();
  return { sidebarDocLinks, headerGuides: guides };
};

export default MyApp;
