import { NextPage } from 'next';
import { ThemeDefaultProvider } from '@cko/primitives';
import MainLayout from 'components/MainLayout';
import { DocItem } from 'types/content';
import { getSidebarDocs } from 'lib/docsItems';
import { defaultTheme } from 'constants/theme';
import '../styles/globals.scss';

type Props = {
  sideBarDocs: DocItem[];
  Component?: any;
  pageProps?: any;
};

const MyApp: NextPage<Props> = ({ sideBarDocs, Component, pageProps }) => {
  return (
    <ThemeDefaultProvider theme={defaultTheme}>
      <MainLayout sideBarDocs={sideBarDocs}>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeDefaultProvider>
  );
};

MyApp.getInitialProps = async () => {
  const sideBarDocs = await getSidebarDocs();

  return { sideBarDocs };
};

export default MyApp;
