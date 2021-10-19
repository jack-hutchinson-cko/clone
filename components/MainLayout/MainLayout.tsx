import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useMatchMedia } from '@cko/primitives';

import { Breakpoints } from 'constants/screen';
import { NavTreeElement } from 'types/navTree';
import { HeaderContent } from 'types/header';
import { FooterContent } from 'types/footer';
import { cutOffHashValue } from 'lib/url';
import MenuStateProvider from 'components/MenuStateProvider';
import NASBanner from 'components/NASBanner';
import { clientSettings } from 'constants/clientSettings';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../SideBar';

import AccordionMenu from './AccordionMenu';
import ListMenu from './ListMenu';

import {
  MainWrapper,
  HeaderWrapper,
  ContentWrapper,
  SideBarWrapper,
  FooterWrapper,
} from './MainLayout.styles';

export type Props = {
  navTreeLinks: NavTreeElement[];
  headerContent: HeaderContent;
  footerContent: FooterContent;
  isFAQSection?: boolean;
};

const MainLayout: FC<Props> = ({
  children,
  navTreeLinks,
  headerContent,
  footerContent,
  isFAQSection,
}) => {
  const { asPath } = useRouter();
  const activeLink = useMemo(() => cutOffHashValue(asPath), [asPath]);
  const isDesktop = useMatchMedia(Breakpoints.DESKTOP);
  const isMobile = useMatchMedia(Breakpoints.MOBILE);

  const Menu = isMobile ? AccordionMenu : ListMenu;
  const menu = <Menu docsTreeLinks={navTreeLinks} activeLink={activeLink} />;

  return (
    <>
      {clientSettings.NASBannerShown && <NASBanner />}
      <MenuStateProvider>
        <MainWrapper>
          <HeaderWrapper>
            <Header
              menuWidget={menu}
              guides={headerContent.guides}
              popularSearches={headerContent.popularSearches}
              popularSearchesTitle={headerContent.popularSearchesTitle}
              emptySearchResult={headerContent.emptySearchResult}
              loginUrl={headerContent.loginUrl}
              testAccountUrl={headerContent.testAccountUrl}
              isFAQSection={isFAQSection}
            />
          </HeaderWrapper>
          {isFAQSection ? (
            children
          ) : (
            <ContentWrapper>
              {isDesktop && (
                <SideBarWrapper>
                  <SideBar menuWidget={menu} />
                </SideBarWrapper>
              )}
              {children}
            </ContentWrapper>
          )}

          <FooterWrapper>
            <Footer
              navigation={footerContent.navigation}
              social={footerContent.social}
              policies={footerContent.policies}
            />
          </FooterWrapper>
        </MainWrapper>
      </MenuStateProvider>
    </>
  );
};

export default MainLayout;
