import { useRouter } from 'next/router';
import { useState, useEffect, FC } from 'react';
import Link from 'next/link';

import { AnchorItem } from 'types/anchors';
import { withAnchorListener, WithAnchorListenerProps } from 'components/AnchorsProvider';
import { getHashValue, updateNavigationHash } from 'lib/url';

import { NavigationHeader, LinkWrapper, AnchorLink } from './AnchorNavigation.styles';

type Props = {
  anchors: AnchorItem[];
};

const AnchorNavigation: FC<WithAnchorListenerProps<Props>> = ({
  anchors,
  shownAnchors,
  initialized,
}) => {
  const router = useRouter();
  const [selectedHref, setSelectedHref] = useState<string>();

  useEffect(() => {
    const slug = getHashValue(router.asPath);

    if (slug) {
      setSelectedHref(`#${slug}`);
    } else {
      const [first] = anchors;
      setSelectedHref(first.href);
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
