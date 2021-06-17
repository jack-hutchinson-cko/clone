import { FC } from 'react';

import { NavTreeElement } from 'types/navTree';
import { IconEarth } from 'components/Icons';
import NavigationTree, { ListItem, ListItemLink } from 'components/NavigationTree';
import { Container, Navigation } from './TreeMenuWidget.styles';

type Props = {
  docsTreeLinks: NavTreeElement[];
  homeLink: string;
  homeLinkTitle: string;
  activeLink: string;
};

const TreeMenuWidget: FC<Props> = ({ docsTreeLinks, homeLink, homeLinkTitle, activeLink }) => (
  <Container>
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
  </Container>
);

export default TreeMenuWidget;
