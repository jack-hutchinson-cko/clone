import { FC, ReactNode } from 'react';

import { HeaderLink } from 'types/header';
import ExtraLinks, { ExtraItem } from './ExtraLinks';

type Props = {
  guides: HeaderLink[];
  mapTitle: (title: string, Icon: FC<unknown>) => ReactNode;
  withMobileSize?: boolean;
};

const GuidesLinks: FC<Props> = ({ guides, mapTitle, withMobileSize }) => (
  <ExtraLinks withMobileSize={withMobileSize}>
    {guides.map(({ title, description, url, Icon }) => (
      <ExtraItem key={title} href={url} title={mapTitle(title, Icon)}>
        {description}
      </ExtraItem>
    ))}
  </ExtraLinks>
);

export default GuidesLinks;
