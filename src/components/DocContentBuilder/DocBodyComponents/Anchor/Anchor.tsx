import { FC } from 'react';
import Link from 'next/link';
import { TextHeadingTwo, Link as PrimitiveLink } from '@cko/primitives';
import { DocContent } from 'src/types/content';

import styles from '../docBodyComponents.module.scss';
import AnchorWrapper from './AnchorWrapper';

type Props = DocContent<{
  onUpdateAnchor?: (id: number, slug?: string) => void;
}>;

const Anchor: FC<Props> = ({ id, data, params: { anchorHref }, onUpdateAnchor }) => (
  <AnchorWrapper id={id} slug={anchorHref} onSelect={onUpdateAnchor}>
    <TextHeadingTwo className={styles.subTitle}>
      <Link href={`#${anchorHref}`} passHref replace>
        <PrimitiveLink name={anchorHref}>{data}</PrimitiveLink>
      </Link>
    </TextHeadingTwo>
  </AnchorWrapper>
);

export default Anchor;
