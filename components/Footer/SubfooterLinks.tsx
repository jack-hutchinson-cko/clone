import { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';
import footerList from '../../mocks/footerSection';

const SubfooterLinksComponent: FunctionComponent = () => {
  return (
    <div className={styles.subfooterGridItem}>
      <p className={styles.subfooterTitle}>© 2021 Checkout.com</p>
      <ul className={styles.subfooterWrapper}>
        {footerList.policies.map((sectionLink, sectionLinkIndex) => {
          return (
            <li className={styles.subfooterLink} key={sectionLinkIndex}>
              <Link href={sectionLink.link}>
                <a target="_blank" rel="noreferrer">
                  {sectionLink.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubfooterLinksComponent;
