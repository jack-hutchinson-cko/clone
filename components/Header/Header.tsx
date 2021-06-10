import { FC } from 'react';
import Link from 'next/link';
import { HeaderLogo } from 'components/Icons/Icons';
import styles from './header.module.scss';

const HeaderComponent: FC = () => {
  return (
    <nav className={styles.headerbar}>
      <div className={styles.headerbarContainer}>
        <div className={styles.sectionLogo}>
          <Link href="/">
            <div className={styles.headerLogo}>
              <div className={styles.logo}>
                <HeaderLogo />
              </div>
              <h3 className={styles.docLabel}>Documentation</h3>
            </div>
          </Link>
        </div>
        <div className={styles.headerbarRight}>
          <a href="/" className={styles.testAccountLink} rel="noreferrer">
            Get test account
          </a>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
