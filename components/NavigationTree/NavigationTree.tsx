import { FC, ReactNode } from 'react';

import { NavTreeElement } from 'types/navTree';
import ListSection from './ListSection';
import ListItem from './ListItem';
import ListItemLink from './ListItemLink';

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
  activeLink: string;
  docsTreeLinks: NavTreeElement[];
};

const NavigationTree: FC<Props> = ({ docsTreeLinks, activeLink }) => (
  <>{docsTreeLinks.map((c) => renderSegment(c, activeLink, true))}</>
);

export default NavigationTree;
