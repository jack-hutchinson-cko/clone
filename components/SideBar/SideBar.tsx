import { FC } from 'react';

import { NavTreeElement } from 'types/navTree';
import NavigationTree, { ListItem, ListItemLink } from '../NavigationTree';
import { IconEarth } from '../Icons';
import { Navigation } from './SideBar.styles';

export type Props = {
  homeLink?: string;
  homeLinkTitle?: string;
  activeLink: string;
  docsTreeLinks: NavTreeElement[];
};

const SideBar: FC<Props> = ({ docsTreeLinks, activeLink, homeLink, homeLinkTitle }) => (
  <aside>
    {homeLink && (
      <Navigation>
        <ListItem
          isRoot
          icon={<IconEarth />}
          link={
            <ListItemLink href={homeLink} active={homeLink === activeLink}>
              {homeLinkTitle}
            </ListItemLink>
          }
        />
      </Navigation>
    )}
    <Navigation>
      <NavigationTree docsTreeLinks={docsTreeLinks} activeLink={activeLink} />
    </Navigation>
  </aside>
);

export default SideBar;
