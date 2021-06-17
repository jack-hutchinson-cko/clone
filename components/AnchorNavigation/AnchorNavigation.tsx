import { useRouter } from 'next/router';
import { useState, useEffect, FC } from 'react';
import { get } from 'lodash';
import Link from 'next/link';

import { withAnchorListener, WithAnchorListenerProps } from 'components/AnchorsProvider';
import { getHashValue, updateNavigationHash } from 'lib/url';

import { NavigationHeader, LinkWrapper, AnchorLink } from './AnchorNavigation.styles';

type Props = {
  anchors: { title: string; href: string }[];
};

const AnchorNavigation: FC<WithAnchorListenerProps<Props>> = ({ anchors, selectedAnchorHref }) => {
  const router = useRouter();
  const [selectedHref, setSelectedHref] = useState<string>();

  useEffect(() => {
    const slug = getHashValue(router.asPath);
    const anchor = anchors.find(({ href }) => href === `#${slug}`) ?? get(anchors, '[0]');
    setSelectedHref(anchor.href);
  }, [router, anchors]);

  useEffect(() => {
    if (selectedAnchorHref) {
      updateNavigationHash(selectedAnchorHref);
      setSelectedHref(selectedAnchorHref);
    }
  }, [selectedAnchorHref]);

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
