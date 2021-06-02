import { FC, useState, useCallback, ReactNode } from 'react'
import { IconActionChevronRight, IconActionChevronDown } from '@cko/icons'

import styles from './ListSection.module.scss'

type Props = {
  link: ReactNode
}

export const ListSection: FC<Props> = ({ link, children }) => {
  const [opened, setOpened] = useState(true)
  const onToggleHandler = useCallback(() => {
    setOpened(!opened)
  }, [opened])
  return (
    <div className={styles.listSection}>
      <div className={styles.listSectionHeader}>
        <div className={styles.headerIcon} onClick={onToggleHandler}>
          {opened ? <IconActionChevronDown /> : <IconActionChevronRight />}
        </div>
        {link}
      </div>
      <div className={styles.sectionContent} style={{ display: opened ? 'block' : 'none' }}>
        {children}
      </div>
    </div>
  )
}

export default ListSection
