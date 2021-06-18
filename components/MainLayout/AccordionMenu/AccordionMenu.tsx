import React, { FC, ReactNode } from 'react';

import { NavTreeElement } from 'types/navTree';
import NavigationTreeMenu, { NavigationTree } from 'components/NavigationTreeMenu';
import ListItemLink from '../ListMenu/ListItemLink';
import AccordionSection from './AccordionSection';
import AccordionItem from './AccordionItem';

export type Props = {
  homeLink: string;
  homeLinkTitle?: string;
  homeLinkIcon?: ReactNode;
  activeLink: string;
  docsTreeLinks: NavTreeElement[];
};

const AccordionMenu: FC<Props> = ({ docsTreeLinks, activeLink, homeLink, homeLinkTitle }) => (
  <NavigationTreeMenu
    isMobile
    topLinks={
      <AccordionItem
        isRoot
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
      NavSection={AccordionSection}
      NavItem={AccordionItem}
      NavLink={ListItemLink}
    />
  </NavigationTreeMenu>
);

export default AccordionMenu;
