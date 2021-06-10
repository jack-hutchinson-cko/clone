import { NextPage } from 'next';
import { ThemeDefaultProvider } from '@cko/primitives';
import MainLayout from 'components/MainLayout';

import { NavTreeElement } from 'types/sideBar';
import { getSidebarDocLinks } from 'lib/docsItems';
import { defaultTheme } from 'constants/theme';
import '../styles/globals.scss';

type Props = {
  sidebarDocLinks: NavTreeElement[];
  Component?: any;
  pageProps?: any;
};

const MyApp: NextPage<Props> = ({ sidebarDocLinks, Component, pageProps }) => {
  return (
    <ThemeDefaultProvider theme={defaultTheme}>
      <MainLayout navTreeLinks={sidebarDocLinks}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeDefaultProvider>
  );
};

MyApp.getInitialProps = async () => {
  const sidebarDocLinks = await getSidebarDocLinks();
  return { sidebarDocLinks };
};

export default MyApp;
