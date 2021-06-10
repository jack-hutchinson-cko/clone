import { FunctionComponent } from 'react';
import Link from 'next/link';
import { FooterLogo } from '../Icons/Icons';
import styles from './footer.module.scss';
import FooterLinksComponent from './FooterLinks';
import SubfooterLinksComponent from './SubfooterLinks';
import SubfooterSocialLinksComponent from './SubfooterSocialLinks';

const FooterComponent: FunctionComponent = () => {
  return (
    <footer>
      <div className={styles.footerBackground}>
        <div className={styles.footerMain}>
          <div className={styles.footerLogo}>
            <div className={styles.footerLogoWrapper}>
              <Link href="/">
                <div>
                  <FooterLogo />
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.footerLinkListContainer}>
            <FooterLinksComponent />
          </div>
          <div className={styles.subFooter}>
            <SubfooterLinksComponent />
            <div className={styles.subfooterGridItem}>
              <div className={styles.subfooterDescription}>
                <p>
                  Authorised and regulated as an electronic money institution by the UK Financial
                  Conduct Authority under number 900816.
                </p>
                <div className={styles.containerSubfooterLink}>
                  <span>Powered by&nbsp;</span>
                  <Link href="https://www.atlassian.com">
                    <a href="https://www.atlassian.com" className={styles.descriptionLink}>
                      Atlassian Confluence
                    </a>
                  </Link>
                  <span>&nbsp;and&nbsp;</span>
                  <Link href="https://www.k15t.com/go/scroll-viewport">
                    <a
                      href="https://www.k15t.com/go/scroll-viewport"
                      className={styles.descriptionLink}
                    >
                      Scroll Viewport
                    </a>
                  </Link>
                </div>
              </div>
              <SubfooterSocialLinksComponent />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
