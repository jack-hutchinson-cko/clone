import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import { NavTreeElement } from 'types/navTree';
import { HeaderGuid } from 'types/header';
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
  headerGuides: HeaderGuid[];
};

const MainLayout: FC<Props> = ({ children, navTreeLinks, headerGuides }) => {
  const { asPath } = useRouter();
  const activeLink = useMemo(() => getPathValue(asPath), [asPath]);

  return (
    <MainWrapper>
      <HeaderWrapper>
        <Header headerGuides={headerGuides} />
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
