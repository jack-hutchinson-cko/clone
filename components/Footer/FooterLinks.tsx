import { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';
import footerList from '../../mocks/footerSection';

const appendSpecialLink = (link) => {
  if (link === 'Careers') return <span className={styles.footerLinkSpecial}>WE`RE HIRING</span>;
};
const FooterLinksComponent: FunctionComponent = () => {
  return (
    <>
      {footerList.navigation.map((item, index) => {
        return (
          <div className={styles.footerList} key={index}>
            <p className={styles.footerListTitle}>{item.navigationTitle}</p>
            <div className={styles.footerColumnContainer}>
              {item.items.map((containerSection, containerIndex) => {
                return (
                  <div key={containerIndex}>
                    <ul className={styles.footerColumnSubContainer}>
                      {containerSection.map((sectionLink, sectionLinkIndex) => {
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
