import { FunctionComponent } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import SideBar from '../SideBar'
import styles from './mainLayout.module.scss'

type Props = {
  sideBarLinks: Array<{ link: string; name: string }>
}

const MainLayout: FunctionComponent<Props> = ({ children, sideBarLinks }) => (
  <div className={styles.mainWrapper}>
    <div className={styles.headerWrapper}>
      <Header />
    </div>
    <div className={styles.contentWrapper}>
      <div className={styles.sideBarWrapper}>
        <SideBar sideBarLinks={sideBarLinks} />
      </div>
      <main className={styles.content}>{children}</main>
    </div>
    <div className={styles.footerWrapper}>
      <Footer />
    </div>
  </div>
)

export default MainLayout
