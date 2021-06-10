import { FC } from 'react';
import footerList from '../../mocks/footerSection';
import styles from './footer.module.scss';

export type SocialItemType = {
  link: string;
  title: string;
  Icon: FC;
};

const SubfooterSocialLinksComponent: FC = () => {
  return (
    <div className={styles.subfooterSocialLinks}>
      {footerList.social.map(({ link, title, Icon }: SocialItemType) => {
        return (
          <a
            href={link}
            key={link}
            className={styles.subfooterLogo}
            title={title}
            rel="noopener noreferrer"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SubfooterSocialLinksComponent;
