import { FC } from 'react';
import Link from 'next/link';
import footerList from '../../mocks/footerSection';
import styles from './footer.module.scss';

const SubfooterSocialLinksComponent: FC = () => {
  return (
    <div className={styles.subfooterSocialLinks}>
      {footerList.social.map(
        (
          { link, title, Icon }: { link: string; title: string; Icon: FC },
          sectionLinkIndex: number,
        ) => {
          return (
            <Link href={link} key={sectionLinkIndex}>
              <a className={styles.subfooterLogo} title={title} rel="noopener noreferrer">
                <Icon />
              </a>
            </Link>
          );
        },
      )}
    </div>
  );
};

export default SubfooterSocialLinksComponent;
