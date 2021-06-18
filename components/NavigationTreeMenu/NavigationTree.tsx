import { FC, ReactNode } from 'react';
import { NavTreeElement } from 'types/navTree';

export type NavigationItemProps<T = unknown> = {
  link: ReactNode;
  isRoot?: boolean;
} & T;

export type NavigationSectionProps<T = unknown> = {
  link: ReactNode;
  isRoot?: boolean;
} & T;

export type NavigationLinkProps<T = unknown> = {
  isActive: boolean;
  href: string;
} & T;

export type Props = {
  activeLink: string;
  docsTreeLinks: NavTreeElement[];
  NavSection: FC<NavigationSectionProps>;
  NavItem: FC<NavigationItemProps>;
  NavLink: FC<NavigationLinkProps>;
};

const NavigationTree: FC<Props> = ({ docsTreeLinks, activeLink, NavSection, NavItem, NavLink }) => {
  const renderSegment = (el: NavTreeElement, isActiveLink: string, isRoot?: boolean): ReactNode => {
    const { id, title, path, children } = el;
    const link = (
      <NavLink href={path} isActive={path === isActiveLink}>
        {title}
      </NavLink>
    );

    if (children?.length) {
      return (
        <NavSection key={id} isRoot={isRoot} link={link}>
          {children.map((n) => renderSegment(n, isActiveLink))}
        </NavSection>
      );
    }
    return <NavItem key={id} link={link} isRoot={isRoot} />;
  };
  return <>{docsTreeLinks.map((c) => renderSegment(c, activeLink, true))}</>;
};

export default NavigationTree;
