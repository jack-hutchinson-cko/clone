import { FC, useState, useCallback, ReactNode } from 'react';
import Link from 'next/link';
import { useMatchMedia } from '@cko/primitives';

import {
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
import Drawer from './Drawer';
import NavigationItemHolder, { ContentAlign } from './NavigationItemHolder';
import ExtraLinks, { ExtraItem } from './ExtraLinks';
import SearchField from './SearchField';
import Logo from './HeaderLogo';

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

  const contentGuides: ReactNode = (
    <ExtraLinks isMobile={isMobile}>
      <ExtraItem
        href="/"
        title={
          <NavigationLink>
            <IconSourceCode /> Api Reference
          </NavigationLink>
        }
      >
        Our reference library for integrating with our API
      </ExtraItem>
      <ExtraItem
        href="/"
        title={
          <NavigationLink>
            <IconChat /> FAQ
          </NavigationLink>
        }
      >
        Find answers to our most frequently asked questions
      </ExtraItem>
      <ExtraItem
        href="/"
        title={
          <NavigationLink>
            <IconDocSearch /> Classic Docs
          </NavigationLink>
        }
      >
        Documentation for our Classic API
      </ExtraItem>
    </ExtraLinks>
  );

  const contentLogin = (
    <ExtraLinks
      footerChildren={
        <ExtraItem
          href="/"
          title={
            <NavigationLink>
              <IconTestAccount /> Test Account
            </NavigationLink>
          }
        >
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
      }
    >
      <ExtraItem
        title={
          <NavigationLink>
            <IconAccount /> The Hub
          </NavigationLink>
        }
      >
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
    </ExtraLinks>
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
            <Link href="/">
              <Logo />
            </Link>
          </NavigationItem>
          {isMobile && (
            <NavigationItem>
              <SearchButton isActive={showSearch} onClick={onToggleSearchDrawer} />
            </NavigationItem>
          )}
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
