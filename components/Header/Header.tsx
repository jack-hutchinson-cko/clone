import { FC, useContext, useCallback, ReactNode } from 'react';
import Link from 'next/link';
import { useMatchMedia } from '@cko/primitives';

import { HeaderLink, SearchResultLink } from 'types/header';
import { Breakpoints } from 'constants/screen';
import useScrollDisabled from 'hooks/useScrollDisabled';
import { ThemeContext } from 'theme/themeContext';
import { IconAccount, IconTestAccount, IconActionArrowRight } from 'components/Icons';
import { withMenuState, WithMenuStateProps } from 'components/MenuStateProvider';
import Switch from 'components/Switch';
import MenuButton from './MenuButton';
import SearchButton from './SearchButton';
import Drawer from './Drawer';
import NavigationItemHolder, { ContentAlign } from './NavigationItemHolder';
import SearchWidget from './SearchWidget';
import LoginWidget from './LoginWidget';
import HeaderLogo from './HeaderLogo';
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
  ButtonLogin,
  NavigationDrawers,
  SearchFieldWrapper,
  DrawerTopContentWrapper,
  DrawerBottomContentWrapper,
  MiddleNavigationSection,
  MiddleNavigationItem,
} from './Header.styles';

type Props = {
  menuWidget?: ReactNode;
  guides: HeaderLink[];
  popularSearches: SearchResultLink[];
  emptySearchResult: string;
  popularSearchesTitle: string;
  loginUrl: string;
  testAccountUrl: string;
};

const Header: FC<WithMenuStateProps<Props>> = ({
  menuWidget,
  guides,
  popularSearches,
  emptySearchResult,
  popularSearchesTitle,
  loginUrl,
  testAccountUrl,
  menuState,
  onChangeMenuState,
  searchState,
  onChangeSearchState,
}) => {
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  const isTablet = useMatchMedia(Breakpoints.TABLET);
  const isDesktop = useMatchMedia(Breakpoints.DESKTOP);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDarkTheme = theme === 'dark';

  useScrollDisabled((searchState || menuState) && isMobile);

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
      isMobile={!isDesktop}
      gap={12}
      dividerText="or"
      link={
        <Link href={loginUrl} passHref>
          <ButtonLogin fullWidth={!isDesktop} target="_blank">
            Log in
          </ButtonLogin>
        </Link>
      }
      alternativeLink={
        <Link href={testAccountUrl} passHref>
          <NavigationLink light={!isDesktop} underlineOnHover target="_blank">
            Apply for an account <IconActionArrowRight />
          </NavigationLink>
        </Link>
      }
    />
  );

  const searchWidget = (
    <SearchWidget
      isMobile={isMobile}
      popularSearches={popularSearches}
      emptySearchResult={emptySearchResult}
      popularSearchesTitle={popularSearchesTitle}
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
                <HeaderLogo onClick={onClickLogo} />
              </NavigationLink>
            </Link>
          </NavigationItem>
          {isMobile && (
            <NavigationItem>
              {menuState ? (
                <Switch
                  icon={switchUncheckedIcon}
                  checked={isDarkTheme}
                  checkedIcon={switchCheckedIcon}
                  onChange={toggleTheme}
                />
              ) : (
                <SearchButton isActive={searchState} onClick={onToggleSearchDrawer} />
              )}
            </NavigationItem>
          )}
        </NavigationSection>
        <MiddleNavigationSection>
          <NavigationItemHolder
            isMobile={isMobile}
            content={
              <GuidesLinks
                isMobile={isMobile}
                guides={guides}
                mapTitle={(title, Icon) => (
                  <NavigationLink target="_blank" large underlineOnHover>
                    <Icon /> {title}
                  </NavigationLink>
                )}
              />
            }
          >
            {(open) => (
              <NavigationItem withHover isSelected={open}>
                Guides <ToggleIcon isOpen={open} />
              </NavigationItem>
            )}
          </NavigationItemHolder>
          {(isDesktop || isTablet) && (
            <MiddleNavigationItem>
              <SearchFieldWrapper>{searchWidget}</SearchFieldWrapper>
            </MiddleNavigationItem>
          )}
        </MiddleNavigationSection>
        {!isMobile && (
          <NavigationSection>
            {isDesktop && (
              <>
                <NavigationItemHolder
                  contentAlign={ContentAlign.RIGHT}
                  content={
                    <SignInLinks
                      headerTitle={
                        <NavigationLink large>
                          <IconTestAccount /> Test Account
                        </NavigationLink>
                      }
                      headerDescription="Monitor transactions, business performance and customer trends."
                      extraContent={loginWidget}
                      footerTitle={
                        <NavigationLink large>
                          <IconAccount /> The Hub
                        </NavigationLink>
                      }
                      footerExtraContent={
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
                      }
                    />
                  }
                >
                  {(open) => (
                    <NavigationItem withHover isSelected={open}>
                      Log In <ToggleIcon isOpen={open} />
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
                <NavigationItem withPointer={false}>
                  <Switch
                    icon={switchUncheckedIcon}
                    checked={isDarkTheme}
                    checkedIcon={switchCheckedIcon}
                    onChange={toggleTheme}
                  />
                </NavigationItem>
              </>
            )}
            {isTablet && (
              <>
                <NavigationItem withPointer={false}>
                  <Switch
                    icon={switchUncheckedIcon}
                    checked={isDarkTheme}
                    checkedIcon={switchCheckedIcon}
                    onChange={toggleTheme}
                  />
                </NavigationItem>
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
            <DrawerTopContentWrapper>{menuWidget}</DrawerTopContentWrapper>
            <DrawerBottomContentWrapper>{loginWidget}</DrawerBottomContentWrapper>
          </Drawer>
        )}
        {isMobile && searchState && (
          <Drawer isMobile onClose={onToggleSearchDrawer}>
            {searchWidget}
          </Drawer>
        )}
      </NavigationDrawers>
    </Navigation>
  );
};

export default withMenuState(Header) as FC<Props>;
