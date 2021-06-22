import { FC, useCallback, ReactNode } from 'react';
import Link from 'next/link';
import { useMatchMedia } from '@cko/primitives';

import { HeaderLink, SearchResultLink } from 'types/header';
import { Breakpoints } from 'constants/screen';
import useScrollDisabled from 'hooks/useScrollDisabled';
import { IconAccount, IconTestAccount, IconActionArrowRight } from 'components/Icons';
import { withMenuState, WithMenuStateProps } from 'components/MenuStateProvider';
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
  ButtonLogin,
  NavigationDrawers,
  SearchFieldWrapper,
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
              <SearchButton isActive={searchState} onClick={onToggleSearchDrawer} />
            </NavigationItem>
          )}
        </NavigationSection>
        <NavigationSection>
          <NavigationItemHolder
            isMobile={isMobile}
            content={
              <GuidesLinks
                isMobile={isMobile}
                guides={guides}
                mapTitle={(title, Icon) => (
                  <NavigationLink target="_blank" underlineOnHover>
                    {Icon} {title}
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
            <NavigationItem>
              <SearchFieldWrapper>{searchWidget}</SearchFieldWrapper>
            </NavigationItem>
          )}
        </NavigationSection>
        {!isMobile && (
          <NavigationSection>
            {isDesktop && (
              <>
                <NavigationItemHolder
                  contentAlign={ContentAlign.RIGHT}
                  content={
                    <SignInLinks
                      headerTitle={
                        <NavigationLink>
                          <IconAccount /> The Hub
                        </NavigationLink>
                      }
                      headerDescription="Monitor transactions, business performance and customer trends."
                      extraContent={loginWidget}
                      footerTitle={
                        <NavigationLink>
                          <IconTestAccount /> Test Account
                        </NavigationLink>
                      }
                      footerExtraContent={
                        <LoginWidget
                          dividerText="or"
                          link={
                            <Link href={loginUrl} passHref>
                              <NavigationLink target="_blank" underlineAlways>
                                Log in
                              </NavigationLink>
                            </Link>
                          }
                          alternativeLink={
                            <Link href={testAccountUrl} passHref>
                              <NavigationLink target="_blank" underlineAlways>
                                apply for an account
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
              </>
            )}
            {isTablet && (
              <NavigationItem>
                <MenuButton isActive={menuState} onClick={onToggleMenuDrawer} />
              </NavigationItem>
            )}
          </NavigationSection>
        )}
      </NavigationContent>
      <NavigationDrawers>
        {!isDesktop && menuState && (
          <Drawer isMobile={isMobile} onClose={onToggleMenuDrawer} bottomContent={loginWidget}>
            {menuWidget}
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