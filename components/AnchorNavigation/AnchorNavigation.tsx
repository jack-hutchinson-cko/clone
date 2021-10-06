import { FC } from 'react';
import Link from 'next/link';
import { AnchorItem } from 'types/anchors';
import { withAnchorListener, WithAnchorListenerProps } from 'components/AnchorsProvider';

import { NavigationHeader, LinkWrapper, AnchorLink } from './AnchorNavigation.styles';

type Props = {
  anchors: AnchorItem[];
};

const AnchorNavigation: FC<WithAnchorListenerProps<Props>> = ({ anchors, selectedHref }) => {
  return (
    <div>
      <NavigationHeader>On this page</NavigationHeader>
      <LinkWrapper>
        {anchors.map(({ title, href }) => (
          <Link key={href} href={href} passHref replace>
            <AnchorLink href={href} isActive={href === selectedHref}>
              {title}
            </AnchorLink>
          </Link>
        ))}
      </LinkWrapper>
    </div>
  );
};

export default withAnchorListener<Props>(AnchorNavigation);
