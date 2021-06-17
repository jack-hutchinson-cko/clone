import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';

import { NavTreeElement } from 'types/navTree';
import { HeaderContent } from 'types/header';
import { getPathValue } from 'lib/url';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../SideBar';

import {
  MainWrapper,
  HeaderWrapper,
  ContentWrapper,
  SideBarWrapper,
  FooterWrapper,
  Content,
} from './MainLayout.styles';

type Props = {
  navTreeLinks: NavTreeElement[];
  headerContent: HeaderContent;
};

const MainLayout: FC<Props> = ({ children, navTreeLinks, headerContent }) => {
  const { asPath } = useRouter();
  const activeLink = useMemo(() => getPathValue(asPath), [asPath]);

  return (
    <MainWrapper>
      <HeaderWrapper>
        <Header
          docsTreeLinks={navTreeLinks}
          homeLink="/"
          homeLinkTitle="Home"
          activeLink={activeLink}
          guides={headerContent.guides}
          popularSearches={headerContent.popularSearches}
          popularSearchesTitle={headerContent.popularSearchesTitle}
          emptySearchResult={headerContent.emptySearchResult}
          loginUrl={headerContent.loginUrl}
          testAccountUrl={headerContent.testAccountUrl}
        />
      </HeaderWrapper>
      <ContentWrapper>
        <SideBarWrapper>
          <SideBar
            docsTreeLinks={navTreeLinks}
            activeLink={activeLink}
            homeLink="/"
            homeLinkTitle="Home"
          />
        </SideBarWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </MainWrapper>
  );
};

export default MainLayout;
