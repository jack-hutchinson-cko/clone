import React, { FC } from 'react';
import { NavTreeElement } from 'types/navTree';
import { ChangelogCounter } from 'components/ChangelogComponents';
import NavigationTreeMenu, { NavigationTree } from '../../NavigationTreeMenu';
import ListSection from './ListSection';
import ListItem from './ListItem';
import ListItemLink from './ListItemLink';
import { StyledIconEarth, StyledChangeLogIcon, ChangeLogWrapper } from './ListMenu.styles';

export type Props = {
  activeLink: string;
  docsTreeLinks: NavTreeElement[];
};

const ListMenu: FC<Props> = ({ docsTreeLinks, activeLink }) => (
  <NavigationTreeMenu>
    <ListItem
      isRoot
      icon={<StyledChangeLogIcon />}
      link={
        <ChangeLogWrapper>
          <ListItemLink href="/changelog" isActive={activeLink === '/changelog'}>
            Changelog
          </ListItemLink>
          <ChangelogCounter />
        </ChangeLogWrapper>
      }
      bottomPadding={16}
    />
    <ListItem
      isRoot
      icon={<StyledIconEarth />}
      link={
        <ListItemLink href="/" isActive={activeLink === '/'}>
          Home
        </ListItemLink>
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

export default ListMenu;
