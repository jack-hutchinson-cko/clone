import { FC, useState, useCallback, ReactNode } from 'react';
import Link from 'next/link';
import { useMatchMedia } from '@cko/primitives';

import { IconAccount, IconTestAccount, IconActionArrowRight } from 'components/Icons';

import { HeaderGuid } from 'types/header';

import { Breakpoints } from 'constants/screen';
import MenuButton from './MenuButton';
import SearchButton from './SearchButton';
import Drawer from './Drawer';
import NavigationItemHolder, { ContentAlign } from './NavigationItemHolder';
import ExtraLinks, { ExtraItem } from './ExtraLinks';
import SearchField from './SearchField';
import HeaderLogo from './HeaderLogo';

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
  headerGuides: HeaderGuid[];
};

const Header: FC<Props> = ({ headerGuides }) => {
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
      {headerGuides.map(({ title, description, url, Icon }, i) => (
        <ExtraItem
          key={title}
          href={url}
          title={
            <NavigationLink>
              {Icon} {title}
            </NavigationLink>
          }
        >
          {description}
        </ExtraItem>
      ))}
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
            <Link href="/" passHref>
              <HeaderLogo />
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
