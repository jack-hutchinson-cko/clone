import { type } from 'os';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import footerList from '../../mocks/footerSection';
import styles from './footer.module.scss';

const appendSpecialLink = (link: string) => {
  if (link === 'Careers') return <span className={styles.footerLinkSpecial}>WE`RE HIRING</span>;
};

type FooterNavigationItemType = {
  navigationTitle: string;
  items: { link: string; name: string }[][];
};

const FooterLinksComponent: FunctionComponent = () => {
  return (
    <>
      {footerList.navigation.map((item: FooterNavigationItemType, index: number) => {
        return (
          <div className={styles.footerList} key={index}>
            <p className={styles.footerListTitle}>{item.navigationTitle}</p>
            <div className={styles.footerColumnContainer}>
              {item.items.map((containerSection, containerIndex) => {
                return (
                  <div key={containerIndex}>
                    <ul className={styles.footerColumnSubContainer}>
                      {containerSection.map((sectionLink, sectionLinkIndex: number) => {
                        return (
                          <li className={styles.footerLink} key={sectionLinkIndex}>
                            <Link href={sectionLink.link}>
                              <a>{sectionLink.name}</a>
                            </Link>
                            {appendSpecialLink(sectionLink.name)}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FooterLinksComponent;
