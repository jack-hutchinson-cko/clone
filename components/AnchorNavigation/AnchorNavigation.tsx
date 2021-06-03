import { FunctionComponent } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import { DocContentItem } from 'types/content'
import styles from './anchorNavigation.module.scss'

type Props = {
  anchors: DocContentItem[]
  selectedId: number
}

const AnchorNavigation: FunctionComponent<Props> = ({ anchors, selectedId }) => {
  return (
    <div>
      <h3 className={styles.navigationHeader}>On this page</h3>
      <div className={styles.linkWrapper}>
        {anchors.map(({ id, data, params }) => (
          <Link key={id} href={`#${params.anchorHref}`} passHref replace>
            <a className={cn(styles.link, { [styles.active]: selectedId === id })}>{data}</a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AnchorNavigation
