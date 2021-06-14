import { useRouter } from 'next/router';
import { useState, useEffect, FC } from 'react';
import { get } from 'lodash';
import cn from 'classnames';
import Link from 'next/link';
import { getHashValue } from 'lib/url';
import styles from './anchorNavigation.module.scss';

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
      <h3 className={styles.navigationHeader}>On this page</h3>
      <div className={styles.linkWrapper}>
        {anchors.map(({ title, href }) => (
          <Link key={href} href={href} passHref replace>
            <a href={href} className={cn(styles.link, { [styles.active]: href === selectedHref })}>
              {title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnchorNavigation;
