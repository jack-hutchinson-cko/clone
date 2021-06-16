import { FC, useState, useCallback } from 'react';
import Link from 'next/link';
import { useMatchMedia } from '@cko/primitives';

import { HeaderLink, SearchResultLink } from 'types/header';
import { Breakpoints } from 'constants/screen';
import { IconAccount, IconTestAccount, IconActionArrowRight } from 'components/Icons';
import MenuButton from './MenuButton';
import SearchButton from './SearchButton';
import Drawer from './Drawer';
import NavigationItemHolder, { ContentAlign } from './NavigationItemHolder';
import QuickSearch from './QuickSearch';
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
  ExtraItemActions,
  ButtonLogin,
  NavigationDrawers,
  SearchFieldWrapper,
} from './Header.styles';

type Props = {
  guides: HeaderLink[];
  popularSearches: SearchResultLink[];
  emptySearchResult: string;
  popularSearchesTitle: string;
  loginUrl: string;
  testAccountUrl: string;
};

const Header: FC<Props> = ({
  guides,
  popularSearches,
  emptySearchResult,
  popularSearchesTitle,
  loginUrl,
  testAccountUrl,
}) => {
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  const isTablet = useMatchMedia(Breakpoints.TABLET);
  const isDesktop = useMatchMedia(Breakpoints.DESKTOP);

  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const onToggleSearchDrawer = useCallback(() => {
    setShowSearch(!showSearch);
    setShowMenu(false);
  }, [showSearch]);

  const onToggleMenuDrawer = useCallback(() => {
    setShowMenu(!showMenu);
    setShowSearch(false);
  }, [showMenu]);

  const signInButtons = (
    <ExtraItemActions gap={12}>
      <Link href={loginUrl} passHref>
        <NavigationLink target="_blank">
          <ButtonLogin>Log In</ButtonLogin>
        </NavigationLink>
      </Link>
      or
      <Link href={testAccountUrl} passHref>
        <NavigationLink target="_blank" underlineOnHover>
          Apply for an account <IconActionArrowRight />
        </NavigationLink>
      </Link>
    </ExtraItemActions>
  );

  const search = (
    <QuickSearch
      isMobile={isMobile}
      popularSearches={popularSearches}
      emptySearchResult={emptySearchResult}
      popularSearchesTitle={popularSearchesTitle}
    />
  );

  return (
    <Navigation>
      <NavigationContent isMobile={isMobile}>
        <NavigationSection isMobile={isMobile}>
          {isMobile && (
            <NavigationItem>
              <MenuButton isActive={showMenu} onClick={onToggleMenuDrawer} />
            </NavigationItem>
          )}
          <NavigationItem>
            <Link href="/" passHref>
              <NavigationLink>
                <HeaderLogo />
              </NavigationLink>
            </Link>
          </NavigationItem>
          {isMobile && (
            <NavigationItem>
              <SearchButton isActive={showSearch} onClick={onToggleSearchDrawer} />
            </NavigationItem>
          )}
        </NavigationSection>
        <NavigationSection isMobile={isMobile}>
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
              <SearchFieldWrapper>{search}</SearchFieldWrapper>
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
                      extraContent={signInButtons}
                      footerTitle={
                        <NavigationLink>
                          <IconTestAccount /> Test Account
                        </NavigationLink>
                      }
                      footerExtraContent={
                        <ExtraItemActions>
                          <Link href={loginUrl} passHref>
                            <NavigationLink target="_blank" underlineAlways>
                              Log in
                            </NavigationLink>
                          </Link>
                          or
                          <Link href={testAccountUrl} passHref>
                            <NavigationLink target="_blank" underlineAlways>
                              apply for an account
                            </NavigationLink>
                          </Link>
                        </ExtraItemActions>
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
                <MenuButton isActive={showMenu} onClick={onToggleMenuDrawer} />
              </NavigationItem>
            )}
          </NavigationSection>
        )}
      </NavigationContent>
      <NavigationDrawers>
        {!isDesktop && showMenu && (
          <Drawer autoSize={isMobile} onClose={onToggleMenuDrawer}>
            Navigation content
          </Drawer>
        )}
        {isMobile && showSearch && (
          <Drawer autoSize={isMobile} onClose={onToggleSearchDrawer}>
            {search}
          </Drawer>
        )}
      </NavigationDrawers>
    </Navigation>
  );
};

export default Header;
