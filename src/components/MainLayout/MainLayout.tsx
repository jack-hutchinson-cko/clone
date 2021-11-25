import { FC, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { NavTreeElement } from 'src/types/navTree';
import { HeaderContent } from 'src/types/header';
import { FooterContent } from 'src/types/footer';
import { cutOffHashValue } from 'src/lib/url';
import MenuStateProvider from 'src/components/MenuStateProvider';
import NASBanner from 'src/components/NASBanner';
import { clientSettings } from 'src/constants/clientSettings';
import Header from '../Header';
import Footer from '../Footer';

import AccordionMenu from './AccordionMenu';
import ListMenu from './ListMenu';
import { WindowWithOneTrustType } from './types';

import {
  MainWrapper,
  HeaderWrapper,
  ContentWrapper,
  SideBarWrapper,
  FooterWrapper,
  SkipLink,
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
  const notWhatsNew = asPath !== '/whats-new';
  const activeLink = useMemo(() => cutOffHashValue(asPath), [asPath]);

  useEffect(() => {
    const windowOneTrust = window as WindowWithOneTrustType;
    windowOneTrust.OneTrust?.initializeCookiePolicyHtml();
  }, []);

  return (
    <>
      {notWhatsNew && <SkipLink href="#main">Skip to content</SkipLink>}
      <MenuStateProvider>
        <MainWrapper>
          <HeaderWrapper>
            <Header
              mobileMenuWidget={
                <AccordionMenu docsTreeLinks={navTreeLinks} activeLink={activeLink} />
              }
              menuWidget={<ListMenu docsTreeLinks={navTreeLinks} activeLink={activeLink} />}
              guides={headerContent.guides}
              popularSearches={headerContent.popularSearches}
              popularSearchesTitle={headerContent.popularSearchesTitle}
              emptySearchResult={headerContent.emptySearchResult}
              loginTopUrl={headerContent.loginTopUrl}
              testAccountUrl={headerContent.testAccountUrl}
              loginTitle={headerContent.loginTitle}
              loginBottomUrl={headerContent.loginBottomUrl}
              isFAQSection={isFAQSection}
            />
          </HeaderWrapper>
          {isFAQSection ? (
            children
          ) : (
            <ContentWrapper>
              <SideBarWrapper>
                <ListMenu docsTreeLinks={navTreeLinks} activeLink={activeLink} />
              </SideBarWrapper>
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
