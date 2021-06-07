import { FC } from 'react'
import Link from 'next/link'
import { TextHeadingTwo } from '@cko/primitives'
import { DocContent } from 'types/content'
import { Link as PrimitiveLink } from '@cko/primitives'

import AnchorWrapper from './AnchorWrapper'
import styles from '../docBodyComponents.module.scss'

type Props = DocContent<{
  onUpdateAnchor?: (id: number, slug?: string) => void
}>

const Anchor: FC<Props> = ({ id, data, params: { anchorHref }, onUpdateAnchor }) => (
  <AnchorWrapper id={id} slug={anchorHref} onSelect={onUpdateAnchor}>
    <TextHeadingTwo className={styles.subTitle}>
      <Link href={`#${anchorHref}`} passHref replace>
        <PrimitiveLink name={anchorHref}>{data}</PrimitiveLink>
      </Link>
    </TextHeadingTwo>
  </AnchorWrapper>
)

export default Anchor
