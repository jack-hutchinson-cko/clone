import { FC, ReactNode } from 'react';

import { NavTreeElement } from 'types/sideBar';
import ListSection from './ListSection';
import ListItem from './ListItem';
import ListItemLink from './ListItemLink';
import { IconEarth } from '../Icons';
import { StyledNavigation } from './SideBar.styles';

const renderSegment = (
  { id, title, path, children }: NavTreeElement,
  activeLink: string,
  isRoot?: boolean,
): ReactNode => {
  const link = (
    <ListItemLink href={path} active={path === activeLink}>
      {title}
    </ListItemLink>
  );

  if (children?.length) {
    return (
      <ListSection key={id} isRoot={isRoot} link={link}>
        {children.map((n) => renderSegment(n, activeLink))}
      </ListSection>
    );
  }
  return <ListItem key={id} link={link} isRoot={isRoot} />;
};

export type Props = {
  homeLink?: string;
  homeLinkTitle?: string;
  activeLink: string;
  navTreeLinks: NavTreeElement[];
};

const SideBar: FC<Props> = ({ navTreeLinks, activeLink, homeLink, homeLinkTitle }) => (
  <aside>
    {homeLink && (
      <StyledNavigation>
        <ListItem
          isRoot
          icon={<IconEarth />}
          link={
            <ListItemLink href={homeLink} active={homeLink === activeLink}>
              {homeLinkTitle}
            </ListItemLink>
          }
        />
      </StyledNavigation>
    )}
    <StyledNavigation>
      {navTreeLinks.map((c) => renderSegment(c, activeLink, true))}
    </StyledNavigation>
  </aside>
);

export default SideBar;
