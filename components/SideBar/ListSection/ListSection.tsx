import { FC, useState, useCallback, ReactNode } from 'react'
import { IconActionChevronRight, IconActionChevronDown } from '@cko/icons'
import cn from 'classnames'

import styles from './ListSection.module.scss'

type Props = {
  link: ReactNode
  isRoot: boolean
}

export const ListSection: FC<Props> = ({ link, isRoot, children }) => {
  const [opened, setOpened] = useState(true)
  const onToggleHandler = useCallback(() => {
    setOpened(!opened)
  }, [opened])
  return (
    <div className={styles.listSection}>
      <div className={cn(styles.listSectionHeader, { [styles.large]: isRoot })}>
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
