import { useRouter } from 'next/router';
import { useState, useEffect, FC } from 'react';
import { get } from 'lodash';
import Link from 'next/link';

import { withAnchorListener, WithAnchorListenerProps } from 'components/AnchorsProvider';
import { getHashValue, updateNavigationHash } from 'lib/url';

import { NavigationHeader, LinkWrapper, AnchorLink } from './AnchorNavigation.styles';

type Anchor = { title: string; href: string };

type Props = {
  anchors: Anchor[];
};

const AnchorNavigation: FC<WithAnchorListenerProps<Props>> = ({ anchors, shownAnchors }) => {
  const router = useRouter();
  const [initialized, setInitialized] = useState<boolean>(false);
  const [selectedHref, setSelectedHref] = useState<string>();

  useEffect(() => {
    const slug = getHashValue(router.asPath);
    const selectedAnchor = anchors.find(({ href }) => href === `#${slug}`) ?? get(anchors, '[0]');

    if (selectedAnchor) {
      setSelectedHref(selectedAnchor.href);
      setInitialized(true);
    }
  }, [router, anchors]);

  useEffect(() => {
    if (initialized) {
      const set = new Set<string>(shownAnchors);
      const selectedAnchor = anchors.find(({ href }) => set.has(href));

      if (selectedAnchor) {
        updateNavigationHash(selectedAnchor.href);
        setSelectedHref(selectedAnchor.href);
      }
    }
  }, [shownAnchors, anchors, initialized]);

  console.log(anchors);

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
