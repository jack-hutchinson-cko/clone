import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import { NavTreeElement } from 'types/navTree';
import { HeaderLink } from 'types/header';
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
  headerGuidesLinks: HeaderLink[];
};

const MainLayout: FC<Props> = ({ children, navTreeLinks, headerGuidesLinks }) => {
  const { asPath } = useRouter();
  const activeLink = useMemo(() => getPathValue(asPath), [asPath]);

  return (
    <MainWrapper>
      <HeaderWrapper>
        <Header guides={headerGuidesLinks} />
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
