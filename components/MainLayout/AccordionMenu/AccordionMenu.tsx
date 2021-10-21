import React, { FC } from 'react';
import { WhatsNewCounter } from 'components/WhatsNewComponents';
import { NavTreeElement } from 'types/navTree';
import NavigationTreeMenu, { NavigationTree } from 'components/NavigationTreeMenu';
import ListItemLink from '../ListMenu/ListItemLink';
import AccordionSection from './AccordionSection';
import AccordionItem from './AccordionItem';

export type Props = {
  activeLink: string;
  docsTreeLinks: NavTreeElement[];
};

const AccordionMenu: FC<Props> = ({ docsTreeLinks, activeLink }) => {
  return (
    <NavigationTreeMenu isMobile>
      <AccordionItem
        isRoot
        link={
          <>
            <ListItemLink href="/whats-new" isActive={activeLink === '/whats-new'}>
              What&#39;s New
            </ListItemLink>
            <WhatsNewCounter />
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
};

export default AccordionMenu;
