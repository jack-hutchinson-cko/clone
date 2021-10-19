/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react';
import { useMatchMedia } from '@cko/primitives';
import { NavTreeElement } from 'types/navTree';
import { WhatsNewCounter } from 'components/WhatsNewComponents';
import { Breakpoints } from 'constants/screen';
import NavigationTreeMenu, { NavigationTree } from '../../NavigationTreeMenu';
import ListSection from './ListSection';
import ListItem from './ListItem';
import ListItemLink from './ListItemLink';
import {
  StyledIconEarth,
  StyledWhatsNewIcon,
  WhatsNewWrapper,
  HomeWrapper,
} from './ListMenu.styles';

export type Props = {
  activeLink: string;
  docsTreeLinks: NavTreeElement[];
};

const ListMenu: FC<Props> = ({ docsTreeLinks, activeLink, ...props }) => {
  const isMobile = useMatchMedia(Breakpoints.MOBILE);

  return (
    <NavigationTreeMenu {...props}>
      <ListItem
        isRoot
        icon={<StyledWhatsNewIcon />}
        link={
          <WhatsNewWrapper>
            <ListItemLink href="/whats-new" isActive={activeLink === '/whats-new'}>
              What's New
            </ListItemLink>
            {!isMobile && <WhatsNewCounter />}
          </WhatsNewWrapper>
        }
        bottomMargin={16}
      />
      <ListItem
        isRoot
        icon={<StyledIconEarth />}
        link={
          <HomeWrapper>
            <ListItemLink href="/" isActive={activeLink === '/'}>
              Home
            </ListItemLink>
          </HomeWrapper>
        }
      />
      <NavigationTree
        docsTreeLinks={docsTreeLinks}
        activeLink={activeLink}
        NavSection={ListSection}
        NavItem={ListItem}
        NavLink={ListItemLink}
      />
    </NavigationTreeMenu>
  );
};

export default ListMenu;
