import { FC, ReactNode } from 'react';

import { HeaderLink } from 'types/header';
import ExtraLinks, { ExtraItem } from './ExtraLinks';

type Props = {
  guides: HeaderLink[];
  mapTitle: (title: string, Icon: FC<unknown>) => ReactNode;
  isMobile: boolean;
};

const GuidesLinks: FC<Props> = ({ guides, mapTitle, isMobile }) => (
  <ExtraLinks isMobile={isMobile}>
    {guides.map(({ title, description, url, Icon }) => (
      <ExtraItem key={title} href={url} title={mapTitle(title, Icon)}>
        {description}
      </ExtraItem>
    ))}
  </ExtraLinks>
);

export default GuidesLinks;
