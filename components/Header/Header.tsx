import { FC, useContext, useCallback, ReactNode } from 'react';
import Link from 'next/link';
import { useMatchMedia } from '@cko/primitives';

import { HeaderLink, SearchResultLink } from 'types/header';
import { Breakpoints } from 'constants/screen';
import useScrollDisabled from 'hooks/useScrollDisabled';
import { ThemeContext } from 'theme/themeContext';
import {
  IconAccount,
  IconTestAccount,
  IconActionArrowRight,
  HeaderLogoL,
  HeaderLogoXS,
} from 'components/Icons';
import { withMenuState, WithMenuStateProps } from 'components/MenuStateProvider';
import Switch from 'components/Switch';
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
  SwitchIcon,
  NavigationDrawers,
  SearchFieldWrapper,
  DrawerTopContentWrapper,
  DrawerBottomContentWrapper,
  MiddleNavigationSection,
  MiddleNavigationItem,
  LoginWidgetTopWrapper,
  LiginWidgetBottomWrapper,
  WrapperIconActionArrowRight,
  WrapperWidgedGuidse,
  HeaderLogoWrapper,
} from './Header.styles';

type Props = {
  menuWidget?: ReactNode;
  guides: HeaderLink[];
  popularSearches: SearchResultLink[];
  emptySearchResult: string;
  popularSearchesTitle: string;
  loginUrl: string;
  testAccountUrl: string;
  isFAQSection?: boolean;
};

const Header: FC<WithMenuStateProps<Props>> = ({
  menuWidget,
  guides,
  popularSearches,
  emptySearchResult,
  popularSearchesTitle,
  loginUrl,
  testAccountUrl,
  isFAQSection,
  menuState,
  onChangeMenuState,
  searchState,
  onChangeSearchState,
}) => {
  const isTablet = useMatchMedia(Breakpoints.TABLET);
  const isDesktop = useMatchMedia(Breakpoints.DESKTOP);
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkTheme = theme === 'dark';
  let HeaderLogo = HeaderLogoL;

  useScrollDisabled((searchState || menuState) && isMobile);

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

  if (isMobile) {
    HeaderLogo = HeaderLogoXS;
  }

  const loginWidget = (
    <LoginWidget
      isMobile={!isDesktop}
      gap={12}
      dividerText="or"
      link={
        <Link href={loginUrl} passHref>
          <Button as="a" target="_blank" variant="secondary" size="large" fullWidth={!isDesktop}>
            Log in
          </Button>
        </Link>
      }
      alternativeLink={
        <Link href={testAccountUrl} passHref>
          <NavigationLink light={!isDesktop} underlineOnHover target="_blank">
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
      isMobile={isMobile}
      popularSearches={popularSearches}
      emptySearchResult={emptySearchResult}
      popularSearchesTitle={popularSearchesTitle}
      onLinkClick={onCloseSearchDrawer}
    />
  );

  const switchCheckedIcon = <SwitchIcon>🌛</SwitchIcon>;

  const switchUncheckedIcon = <SwitchIcon>☀️</SwitchIcon>;

  return (
    <Navigation isMobile={isMobile}>
      <NavigationContent>
        <NavigationSection>
          {isMobile && (
            <NavigationItem>
              <MenuButton isActive={menuState} onClick={onToggleMenuDrawer} />
            </NavigationItem>
          )}
          <NavigationItem>
            <Link href="/" passHref>
              <NavigationLink>
                <HeaderLogoWrapper>
                  <HeaderLogo onClick={onClickLogo} />
                </HeaderLogoWrapper>
              </NavigationLink>
            </Link>
          </NavigationItem>
          {isMobile && (
            <NavigationItem>
              {menuState ? (
                // Temporarily hidden. Remove div when it needed.
                <div style={{ visibility: 'hidden' }}>
                  <Switch
                    icon={switchUncheckedIcon}
                    checked={isDarkTheme}
                    checkedIcon={switchCheckedIcon}
                    onChange={toggleTheme}
                  />
                </div>
              ) : (
                <SearchButton isActive={searchState} onClick={onToggleSearchDrawer} />
              )}
            </NavigationItem>
          )}
        </NavigationSection>
        <MiddleNavigationSection>
          <NavigationItemHolder
            offset={75}
            isMobile={isMobile}
            content={
              <WrapperWidgedGuidse>
                <GuidesLinks
                  isMobile={isMobile}
                  guides={guides}
                  mapTitle={(title, Icon) => (
                    <NavigationLink target="_blank" underlineOnHover>
                      <Icon /> {title}
                    </NavigationLink>
                  )}
                />
              </WrapperWidgedGuidse>
            }
          >
            {(open) => (
              <NavigationItem withHover isSelected={open}>
                Guides <ToggleIcon isOpen={open} />
              </NavigationItem>
            )}
          </NavigationItemHolder>
          {!isFAQSection && (isDesktop || isTablet) && (
            <MiddleNavigationItem withPointer={false}>
              <SearchFieldWrapper>{searchWidget}</SearchFieldWrapper>
            </MiddleNavigationItem>
          )}
        </MiddleNavigationSection>
        {!isMobile && (
          <NavigationSection>
            {isDesktop && (
              <>
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
                          <IconAccount /> The Hub
                        </NavigationLink>
                      }
                      footerExtraContent={
                        <LiginWidgetBottomWrapper>
                          <LoginWidget
                            dividerText="or"
                            link={
                              <Link href={loginUrl} passHref>
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
                <NavigationItem>
                  <Link href={testAccountUrl} passHref>
                    <NavigationLink target="_blank" light underlineOnHover>
                      Get test account
                    </NavigationLink>
                  </Link>
                </NavigationItem>
                {/* Temporarily hidden. Remove div when it needed. */}
                <div style={{ display: 'none' }}>
                  <NavigationItem withPointer={false}>
                    <Switch
                      icon={switchUncheckedIcon}
                      checked={isDarkTheme}
                      checkedIcon={switchCheckedIcon}
                      onChange={toggleTheme}
                    />
                  </NavigationItem>
                </div>
              </>
            )}
            {isTablet && (
              <>
                {/* Temporarily hidden. Remove div when it needed. */}
                <div style={{ display: 'none' }}>
                  <NavigationItem withPointer={false}>
                    <Switch
                      icon={switchUncheckedIcon}
                      checked={isDarkTheme}
                      checkedIcon={switchCheckedIcon}
                      onChange={toggleTheme}
                    />
                  </NavigationItem>
                </div>
                <NavigationItem>
                  <MenuButton isActive={menuState} onClick={onToggleMenuDrawer} />
                </NavigationItem>
              </>
            )}
          </NavigationSection>
        )}
      </NavigationContent>
      <NavigationDrawers>
        {!isDesktop && menuState && (
          <Drawer isMobile={isMobile} onClose={onToggleMenuDrawer}>
            {isFAQSection ? null : <DrawerTopContentWrapper>{menuWidget}</DrawerTopContentWrapper>}
            <DrawerBottomContentWrapper>{loginWidget}</DrawerBottomContentWrapper>
          </Drawer>
        )}
        {isMobile && searchState && !isFAQSection && (
          <Drawer isMobile onClose={onToggleSearchDrawer}>
            {searchWidget}
          </Drawer>
        )}
      </NavigationDrawers>
    </Navigation>
  );
};

export default withMenuState(Header) as FC<Props>;
