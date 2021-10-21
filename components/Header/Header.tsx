import { FC, useCallback, ReactNode } from 'react';
import Link from 'next/link';
import { HeaderLink, SearchResultLink } from 'types/header';
import useScrollDisabled from 'hooks/useScrollDisabled';
import {
  IconAccount,
  IconTestAccount,
  IconActionArrowRight,
  HeaderLogoL,
  HeaderLogoXS,
} from 'components/Icons';
import { withMenuState, WithMenuStateProps } from 'components/MenuStateProvider';
import Button from 'components/Button';
import DocsSearchWidget from 'components/Search/DocsSearchWidget';
import MenuButton from './MenuButton';
import SearchButton from './SearchButton';
import Drawer from './Drawer';
import NavigationItemHolder, { ContentAlign } from './NavigationItemHolder';
import LoginWidget from './LoginWidget';
import GuidesLinks from './GuidesLinks';
import SignInLinks from './SignInLinks';

import {
  Navigation,
  NavigationContent,
  NavigationSection,
  NavigationItem,
  NavigationLink,
  ToggleIcon,
  SearchFieldWrapper,
  DrawerTopContentWrapper,
  DrawerBottomContentWrapper,
  MiddleNavigationSection,
  MiddleNavigationItem,
  LoginWidgetTopWrapper,
  LiginWidgetBottomWrapper,
  WrapperIconActionArrowRight,
  WrapperWidgetGuides,
  HeaderLogoWrapper,
  InlineFlexWrapper,
  NavigationDrawers,
} from './Header.styles';

type Props = {
  menuWidget?: ReactNode;
  mobileMenuWidget?: ReactNode;
  guides: HeaderLink[];
  popularSearches: SearchResultLink[];
  emptySearchResult: string;
  popularSearchesTitle: string;
  loginTopUrl: string;
  testAccountUrl: string;
  isFAQSection?: boolean;
  loginTitle: string;
  loginBottomUrl: string;
};

const Header: FC<WithMenuStateProps<Props>> = ({
  menuWidget,
  guides,
  popularSearches,
  emptySearchResult,
  popularSearchesTitle,
  loginTopUrl,
  testAccountUrl,
  isFAQSection,
  menuState,
  onChangeMenuState,
  searchState,
  onChangeSearchState,
  mobileMenuWidget,
  loginTitle,
  loginBottomUrl,
}) => {
  useScrollDisabled(searchState || menuState);

  const onCloseSearchDrawer = useCallback(() => {
    if (searchState) onChangeSearchState(false);
  }, [searchState, onChangeSearchState]);

  const onToggleSearchDrawer = useCallback(() => {
    onChangeSearchState(!searchState);
  }, [searchState, onChangeSearchState]);

  const onToggleMenuDrawer = useCallback(() => {
    onChangeMenuState(!menuState);
  }, [menuState, onChangeMenuState]);

  const onClickLogo = useCallback(() => {
    onChangeMenuState(false);
  }, [onChangeMenuState]);

  const loginWidget = (
    <LoginWidget
      gap={12}
      dividerText="or"
      link={
        <Link href={loginTopUrl} passHref>
          <Button as="a" target="_blank" variant="secondary" size="large" fullWidthOnTablet>
            Log in
          </Button>
        </Link>
      }
      alternativeLink={
        <Link href={testAccountUrl} passHref>
          <NavigationLink lightOnTablet underlineOnHover target="_blank">
            <WrapperIconActionArrowRight>
              Apply for an account <IconActionArrowRight />
            </WrapperIconActionArrowRight>
          </NavigationLink>
        </Link>
      }
    />
  );

  const searchWidget = (
    <DocsSearchWidget
      popularSearches={popularSearches}
      emptySearchResult={emptySearchResult}
      popularSearchesTitle={popularSearchesTitle}
      onLinkClick={onCloseSearchDrawer}
    />
  );

  return (
    <Navigation withMobileSize>
      <NavigationContent>
        <NavigationSection>
          <NavigationItem hideOnDesktop hideOnTablet>
            <MenuButton isActive={menuState} onClick={onToggleMenuDrawer} />
          </NavigationItem>
          <NavigationItem>
            <Link href="/" passHref>
              <NavigationLink>
                <HeaderLogoWrapper>
                  <HeaderLogoL onClick={onClickLogo} />
                  <HeaderLogoXS onClick={onClickLogo} />
                </HeaderLogoWrapper>
              </NavigationLink>
            </Link>
          </NavigationItem>
          <NavigationItem hideOnDesktop hideOnTablet>
            <SearchButton isActive={searchState} onClick={onToggleSearchDrawer} />
          </NavigationItem>
        </NavigationSection>
        <MiddleNavigationSection noPaddingsOnMobile>
          <NavigationItemHolder
            offset={75}
            withMobileSize
            content={
              <WrapperWidgetGuides>
                <GuidesLinks
                  withMobileSize
                  guides={guides}
                  mapTitle={(title, Icon) => (
                    <NavigationLink target="_blank" underlineOnHover>
                      <Icon /> {title}
                    </NavigationLink>
                  )}
                />
              </WrapperWidgetGuides>
            }
          >
            {(open) => (
              <NavigationItem withHover isSelected={open}>
                Guides <ToggleIcon isOpen={open} />
              </NavigationItem>
            )}
          </NavigationItemHolder>
          {!isFAQSection && (
            <MiddleNavigationItem withPointer={false}>
              <SearchFieldWrapper>{searchWidget}</SearchFieldWrapper>
            </MiddleNavigationItem>
          )}
        </MiddleNavigationSection>
        <NavigationSection hideOnMobile>
          <InlineFlexWrapper hideOnMobile hideOnTablet>
            <NavigationItemHolder
              offset={60}
              contentAlign={ContentAlign.RIGHT}
              content={
                <SignInLinks
                  headerTitle={
                    <NavigationLink>
                      <IconTestAccount /> Test account
                    </NavigationLink>
                  }
                  headerDescription="Monitor transactions, business performance and customer trends."
                  extraContent={<LoginWidgetTopWrapper>{loginWidget}</LoginWidgetTopWrapper>}
                  footerTitle={
                    <NavigationLink>
                      <IconAccount /> {loginTitle}
                    </NavigationLink>
                  }
                  footerExtraContent={
                    <LiginWidgetBottomWrapper>
                      <LoginWidget
                        dividerText="or"
                        link={
                          <Link href={loginBottomUrl} passHref>
                            <NavigationLink target="_blank" light underlineAlways>
                              Log in
                            </NavigationLink>
                          </Link>
                        }
                        alternativeLink={
                          <Link href={testAccountUrl} passHref>
                            <NavigationLink target="_blank" light underlineAlways>
                              apply for a test account
                            </NavigationLink>
                          </Link>
                        }
                      />
                    </LiginWidgetBottomWrapper>
                  }
                />
              }
            >
              {(open) => (
                <NavigationItem withHover isSelected={open}>
                  Log in <ToggleIcon isOpen={open} />
                </NavigationItem>
              )}
            </NavigationItemHolder>
          </InlineFlexWrapper>
          <NavigationItem hideOnMobile hideOnTablet>
            <Link href={testAccountUrl} passHref>
              <NavigationLink target="_blank" light underlineOnHover>
                Get test account
              </NavigationLink>
            </Link>
          </NavigationItem>
          <NavigationItem hideOnMobile hideOnDesktop>
            <MenuButton isActive={menuState} onClick={onToggleMenuDrawer} />
          </NavigationItem>
        </NavigationSection>
      </NavigationContent>
      {menuState && (
        <NavigationDrawers hideOnDesktop>
          <Drawer onClose={onToggleMenuDrawer}>
            {isFAQSection ? null : (
              <DrawerTopContentWrapper>
                {menuWidget}
                {mobileMenuWidget}
              </DrawerTopContentWrapper>
            )}
            <DrawerBottomContentWrapper>{loginWidget}</DrawerBottomContentWrapper>
          </Drawer>
        </NavigationDrawers>
      )}
      {searchState && !isFAQSection && (
        <NavigationDrawers hideOnDesktop hideOnTablet>
          <Drawer onClose={onToggleSearchDrawer}>{searchWidget}</Drawer>
        </NavigationDrawers>
      )}
    </Navigation>
  );
};

export default withMenuState(Header) as FC<Props>;
