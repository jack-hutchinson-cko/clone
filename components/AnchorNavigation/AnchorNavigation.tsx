import { useRouter } from 'next/router';
import { useState, useEffect, FC } from 'react';
import { get } from 'lodash';
import Link from 'next/link';
import { getHashValue } from 'lib/url';
import { NavigationHeader, LinkWrapper, AnchorLink } from './AnchorNavigation.styles';

type Props = {
  anchors: { title: string; href: string }[];
};

const AnchorNavigation: FC<Props> = ({ anchors }) => {
  const router = useRouter();
  const [selectedHref, setSelectedHref] = useState<string>();

  useEffect(() => {
    const slug = getHashValue(router.asPath);
    const anchor = anchors.find(({ href }) => href === `#${slug}`) ?? get(anchors, '[0]');
    setSelectedHref(anchor.href);
  }, [router, anchors]);

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

export default AnchorNavigation;
