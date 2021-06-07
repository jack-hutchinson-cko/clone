import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'

import styles from './ListItemLink.module.scss'

type Props = {
  href: string
  active?: boolean
}

const ListItemLink: FC<Props> = ({ children, href, active }) => (
  <Link href={href} passHref>
    <a className={cn(styles.link, { [styles.active]: active })}>{children}</a>
  </Link>
)

export default ListItemLink
