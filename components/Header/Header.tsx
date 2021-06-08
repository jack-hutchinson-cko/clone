import { FC } from 'react'
import Link from 'next/link'
import { HeaderLogo } from 'components/Icons/Icons'
import styles from './header.module.scss'

const HeaderComponent: FC = () => {
  return (
    <nav className={styles.headerbar}>
      <div className={styles.headerbarContainer}>
        <div className={styles.sectionLogo}>
          <Link href="/">
            <a className={styles.headerLogo}>
              <div className={styles.logo}>
                <HeaderLogo />
              </div>
              <h3 className={styles.docLabel}>Documentation</h3>
            </a>
          </Link>
        </div>
        <div className={styles.headerbarRight}>
          <Link href="/">
            <a className={styles.testAccountLink} rel="noreferrer">
              Get test account
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default HeaderComponent
