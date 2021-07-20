import React, { FC } from 'react';
import { ChangelogCounter } from 'components/ChangelogComponents';
import { NavTreeElement } from 'types/navTree';
import NavigationTreeMenu, { NavigationTree } from 'components/NavigationTreeMenu';
import ListItemLink from '../ListMenu/ListItemLink';
import AccordionSection from './AccordionSection';
import AccordionItem from './AccordionItem';

export type Props = {
  activeLink: string;
  docsTreeLinks: NavTreeElement[];
};

const AccordionMenu: FC<Props> = ({ docsTreeLinks, activeLink }) => (
  <NavigationTreeMenu isMobile>
    <AccordionItem
      isRoot
      link={
        <>
          <ListItemLink href="/changelog" isActive={activeLink === '/changelog'}>
            Changelog
          </ListItemLink>
          <ChangelogCounter />
        </>
      }
    />
    <AccordionItem
      isRoot
      link={
        <ListItemLink href="/" isActive={activeLink === '/'}>
          Home
        </ListItemLink>
      }
    />
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
