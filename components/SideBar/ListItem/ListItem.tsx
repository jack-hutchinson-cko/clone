import { FC, ReactNode } from 'react'

import styles from './ListItem.module.scss'

type Props = {
  link: ReactNode
}

const ListItem: FC<Props> = ({ link }) => <div className={styles.listItem}>{link}</div>

export default ListItem
