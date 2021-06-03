import { FC } from 'react'
import { TextHeadingTwo } from '@cko/primitives'
import { DocContentItem } from 'types/content'
import styles from './docBodyComponents.module.scss'
import { Link } from '@cko/primitives'

type Props = Omit<DocContentItem, 'type'>

const Anchor: FC<Props> = ({ data, params: { anchorHref } }) => (
  <TextHeadingTwo className={styles.subTitle}>
    <Link name={anchorHref} href={`#${anchorHref}`}>
      {data}
    </Link>
  </TextHeadingTwo>
)

export default Anchor
