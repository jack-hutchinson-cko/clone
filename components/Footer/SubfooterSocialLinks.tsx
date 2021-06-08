import { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';
import footerList from '../../mocks/footerSection';

const SubfooterSocialLinksComponent: FunctionComponent = () => {
  return (
    <div className={styles.subfooterSocialLinks}>
      {footerList.social.map(({ link, title, Icon }, sectionLinkIndex) => {
        return (
          <Link href={link} key={sectionLinkIndex}>
            <a className={styles.subfooterLogo} title={title} rel="noopener noreferrer">
              <Icon />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default SubfooterSocialLinksComponent;
