import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import Header from '../Header';
import Footer from '../Footer';
import SideBar from '../SideBar';
import styles from './mainLayout.module.scss';

import { NavTreeElement } from 'types/sideBar';
import { getPathValue } from 'lib/url';

type Props = {
  navTreeLinks: NavTreeElement[];
};

const MainLayout: FC<Props> = ({ children, navTreeLinks }) => {
  const { asPath } = useRouter();
  const activeLink = useMemo(() => getPathValue(asPath), [asPath]);

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.sideBarWrapper}>
          <SideBar
            navTreeLinks={navTreeLinks}
            activeLink={activeLink}
            homeLink="/"
            homeLinkTitle="Home"
          />
        </div>
        <main className={styles.content}>{children}</main>
      </div>
      <div className={styles.footerWrapper}>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
