import React, { FC, ReactNode } from 'react';

import { NavTreeElement } from 'types/navTree';
import NavigationTreeMenu, { NavigationTree } from 'components/NavigationTreeMenu';

import ListSection from './ListSection';
import ListItem from './ListItem';
import ListItemLink from './ListItemLink';

export type Props = {
  homeLink: string;
  homeLinkTitle?: string;
  homeLinkIcon?: ReactNode;
  activeLink: string;
  docsTreeLinks: NavTreeElement[];
};

const ListMenu: FC<Props> = ({
  docsTreeLinks,
  activeLink,
  homeLink,
  homeLinkTitle,
  homeLinkIcon,
}) => (
  <NavigationTreeMenu
    topLinks={
      <ListItem
        isRoot
        icon={homeLinkIcon}
        link={
          <ListItemLink href={homeLink} isActive={homeLink === activeLink}>
            {homeLinkTitle}
          </ListItemLink>
        }
      />
    }
  >
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
