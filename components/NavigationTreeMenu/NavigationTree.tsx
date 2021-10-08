import { FC, ReactNode, useState, useCallback, useEffect } from 'react';
import { NavTreeElement } from 'types/navTree';

export type NavigationItemProps<T = unknown> = {
  link: ReactNode;
  isRoot: boolean;
} & T;

export type NavigationSectionProps<T = unknown> = {
  id: string;
  link: ReactNode;
  isRoot: boolean;
  isOpen: boolean;
  onToggleOpen?: (id: string, state: boolean) => void;
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
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const handleToggleOpen = useCallback(
    (id, state) => {
      setVisible({ ...visible, [id]: state });
    },
    [visible],
  );

  useEffect(() => {
    setVisible({});
  }, [activeLink]);

  const renderSegment = (el: NavTreeElement, currentLink: string, isRoot: boolean): ReactNode => {
    const { id, title, path, children } = el;
    const isActive = path === currentLink;
    const link = (
      <NavLink href={path} isActive={isActive}>
        {title}
      </NavLink>
    );

    if (children?.length) {
      const isOpen = currentLink.startsWith(path);
      return (
        <NavSection
          key={id}
          id={id}
          isRoot={isRoot}
          link={link}
          isOpen={visible[id] ?? isOpen ?? isActive}
          onToggleOpen={handleToggleOpen}
        >
          {children.map((n) => renderSegment(n, currentLink, false))}
        </NavSection>
      );
    }
    return <NavItem key={id} link={link} isRoot={isRoot} />;
  };
  return <>{docsTreeLinks.map((c) => renderSegment(c, activeLink, true))}</>;
};

export default NavigationTree;
