import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import { NavTreeElement } from 'types/navTree';
import { HeaderContent } from 'types/header';
import { FooterContent } from 'types/footer';
import { cutOffHashValue } from 'lib/url';
import MenuStateProvider from 'components/MenuStateProvider';
import NASBanner from 'components/NASBanner';
import { clientSettings } from 'constants/clientSettings';
import Header from '../Header';
import Footer from '../Footer';

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

  return (
    <>
      {clientSettings.NASBannerShown && <NASBanner />}
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
