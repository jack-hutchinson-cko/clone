import { FunctionComponent } from 'react'
import Link from 'next/link'

import styles from './BreadCrumb.module.scss'

type Props = {
  breadCrumbsItem: Array<{ name: string; url: string }>
}

const getTotalLink = ({
  parentsNodes,
  url,
}: {
  parentsNodes: Array<{ name: string; url: string }>
  url: string
}): string =>
  `/${parentsNodes
    .map((parentItem) => parentItem.url)
    .concat(url)
    .join('/')}`

const BreadCrumbs: FunctionComponent<Props> = ({ breadCrumbsItem }) => (
  <div className={styles.container}>
    {breadCrumbsItem.map((parentNode, index) => (
      <span key={parentNode.url} className={styles.linkContainer}>
        {index !== 0 ? ' / ' : ''}
        <Link
          href={getTotalLink({
            parentsNodes: breadCrumbsItem.slice(0, index),
            url: parentNode.url,
          })}
          passHref
        >
          <a className={styles.link}>{parentNode.name}</a>
        </Link>
      </span>
    ))}
  </div>
)

export default BreadCrumbs
