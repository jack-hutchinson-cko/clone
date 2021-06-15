/* eslint-disable react/no-array-index-key */
import { FunctionComponent } from 'react';
import Link from 'next/link';
import footerList from '../../mocks/footerSection';
import {
  FooterList,
  FooterListTitle,
  FooterColumnContainer,
  FooterColumnSubContainer,
  FooterLink,
  FooterLinkSpecial,
} from './Footer.styles';

const appendSpecialLink = (link: string) => {
  if (link === 'Careers') {
    return <FooterLinkSpecial>WE`RE HIRING</FooterLinkSpecial>;
  }

  return null;
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
          <FooterList key={index}>
            <FooterListTitle>{item.navigationTitle}</FooterListTitle>
            <FooterColumnContainer>
              {item.items.map((containerSection, containerIndex) => {
                return (
                  <div key={containerIndex}>
                    <FooterColumnSubContainer>
                      {containerSection.map((sectionLink, sectionLinkIndex: number) => {
                        return (
                          <FooterLink key={sectionLinkIndex}>
                            <Link href={sectionLink.link}>{sectionLink.name}</Link>
                            {appendSpecialLink(sectionLink.name)}
                          </FooterLink>
                        );
                      })}
                    </FooterColumnSubContainer>
                  </div>
                );
              })}
            </FooterColumnContainer>
          </FooterList>
        );
      })}
    </>
  );
};

export default FooterLinksComponent;
