import { FC } from 'react'
import Link from 'next/link'
import { TextHeadingTwo } from '@cko/primitives'
import { DocContentItem } from 'types/content'
import styles from './docBodyComponents.module.scss'
import { Link as PrimitiveLink } from '@cko/primitives'

type Props = Omit<DocContentItem, 'type'>

const Anchor: FC<Props> = ({ data, params: { anchorHref } }) => (
  <TextHeadingTwo className={styles.subTitle}>
    <Link href={`#${anchorHref}`} passHref replace>
      <PrimitiveLink name={anchorHref}>{data}</PrimitiveLink>
    </Link>
  </TextHeadingTwo>
)

export default Anchor
