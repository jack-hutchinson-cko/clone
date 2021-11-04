import { FC } from 'react';
import Link from 'next/link';
import { AnchorItem } from 'src/types/anchors';
import { withAnchorListener, WithAnchorListenerProps } from 'src/components/AnchorsProvider';

import {
  NavigationHeader,
  LinkWrapper,
  AnchorLink,
  LinkItemWrapper,
} from './AnchorNavigation.styles';

type Props = {
  anchors: AnchorItem[];
};

const AnchorNavigation: FC<WithAnchorListenerProps<Props>> = ({ anchors, selectedHref }) => {
  return (
    <div>
      <NavigationHeader>On this page</NavigationHeader>
      <LinkWrapper>
        {anchors.map(({ title, href }) => (
          <LinkItemWrapper key={href}>
            <Link href={href} passHref replace>
              <AnchorLink href={href} isActive={href === selectedHref}>
                {title}
              </AnchorLink>
            </Link>
          </LinkItemWrapper>
        ))}
      </LinkWrapper>
    </div>
  );
};

export default withAnchorListener<Props>(AnchorNavigation);
