import { FC, useState, useCallback, ReactNode } from 'react';
import Link from 'next/link';
import { useMatchMedia } from '@cko/primitives';

import {
  HeaderLogo,
  IconSourceCode,
  IconChat,
  IconDocSearch,
  IconAccount,
  IconTestAccount,
  IconActionArrowRight,
} from 'components/Icons';

import { Breakpoints } from 'constants/screen';
import MenuButton from './MenuButton';
import SearchButton from './SearchButton';
import Drawer from './Drawer/Drawer';
import NavigationItemHolder, { ContentAlign } from './NavigationItemHolder';
import SearchField from './SearchField';

import {
  Navigation,
  NavigationContent,
  NavigationSection,
  NavigationItem,
  NavigationLink,
  ToggleIcon,
  Logo,
  Extra,
  ExtraContent,
  ExtraFooter,
  ExtraItem,
  ExtraItemActions,
  ButtonLogin,
  NavigationDrawers,
  SearchFieldWrapper,
} from './Header.styles';

const Header: FC = () => {
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

  const logo = (
    <Link href="/">
      <Logo>
        <HeaderLogo />
        <div>Documentation</div>
      </Logo>
    </Link>
  );

  const contentGuides: ReactNode = (
    <Extra isMobile={isMobile}>
      <ExtraContent>
        <ExtraItem>
          <Link href="/" passHref>
            <NavigationLink>
              <IconSourceCode /> Api Reference
            </NavigationLink>
          </Link>
          Our reference library for integrating with our API
        </ExtraItem>
        <ExtraItem>
          <Link href="/" passHref>
            <NavigationLink>
              <IconChat /> FAQ
            </NavigationLink>
          </Link>
          Find answers to our most frequently asked questions
        </ExtraItem>
        <ExtraItem>
          <Link href="/" passHref>
            <NavigationLink>
              <IconDocSearch /> Classic Docs
            </NavigationLink>
          </Link>
          Documentation for our Classic API
        </ExtraItem>
      </ExtraContent>
    </Extra>
  );

  const contentLogin = (
    <Extra>
      <ExtraContent>
        <ExtraItem>
          <NavigationLink>
            <IconAccount /> The Hub
          </NavigationLink>
          Monitor transactions, business performance and customer trends.
          <ExtraItemActions gap={12}>
            <ButtonLogin>Log In</ButtonLogin>
            or
            <Link href="/">
              <NavigationLink>
                Apply for an account <IconActionArrowRight />
              </NavigationLink>
            </Link>
          </ExtraItemActions>
        </ExtraItem>
      </ExtraContent>
      <ExtraFooter>
        <ExtraItem>
          <Link href="/" passHref>
            <NavigationLink>
              <IconTestAccount /> Test Account
            </NavigationLink>
          </Link>
          <ExtraItemActions>
            <Link href="/" passHref>
              <NavigationLink underline>Log in</NavigationLink>
            </Link>
            or
            <Link href="/" passHref>
              <NavigationLink underline>apply for an account</NavigationLink>
            </Link>
          </ExtraItemActions>
        </ExtraItem>
      </ExtraFooter>
    </Extra>
  );

  return (
    <Navigation>
      <NavigationContent isMobile={isMobile}>
        <NavigationSection isMobile={isMobile}>
          <NavigationItem>
            {isMobile && <MenuButton isActive={showMenu} onClick={onToggleMenuDrawer} />}
          </NavigationItem>
          <NavigationItem>{logo}</NavigationItem>
          <NavigationItem>
            {isMobile && <SearchButton isActive={showSearch} onClick={onToggleSearchDrawer} />}
          </NavigationItem>
        </NavigationSection>
        <NavigationSection isMobile={isMobile}>
          <NavigationItemHolder isMobile={isMobile} content={contentGuides}>
            {(open) => (
              <NavigationItem withHover isSelected={open}>
                Guides <ToggleIcon isOpen={open} />
              </NavigationItem>
            )}
          </NavigationItemHolder>
          {(isDesktop || isTablet) && (
            <NavigationItem>
              <SearchFieldWrapper>
                <SearchField />
              </SearchFieldWrapper>
            </NavigationItem>
          )}
        </NavigationSection>
        {!isMobile && (
          <NavigationSection>
            {isDesktop && (
              <>
                <NavigationItemHolder contentAlign={ContentAlign.RIGHT} content={contentLogin}>
                  {(open) => (
                    <NavigationItem withHover isSelected={open}>
                      Log In <ToggleIcon isOpen={open} />
                    </NavigationItem>
                  )}
                </NavigationItemHolder>
                <NavigationItem>
                  <Link href="/" passHref>
                    <NavigationLink light>Get test account</NavigationLink>
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
            <SearchField />
          </Drawer>
        )}
      </NavigationDrawers>
    </Navigation>
  );
};

export default Header;
