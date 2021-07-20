import { FC } from 'react';

import { AccordionBody } from 'components/Accordion';
import { NavigationList, NavigationItemEntity } from 'types/footer';
import FooterLink from '../FooterLink';

import {
  FooterLinksWrapper,
  FooterAccordion,
  FooterAccordionHead,
  FooterListTitle,
  FooterColumns,
  FooterColumn,
  FooterColumnItem,
  FooterLinkSpecial,
} from './FooterLinks.styles';

const appendSpecialLink = (name: string) => {
  if (name.toLowerCase() === 'careers') {
    return <FooterLinkSpecial>We`re hiring</FooterLinkSpecial>;
  }

  return null;
};

type Props = {
  navigation: NavigationList;
  isMobile?: boolean;
};

const FooterLinks: FC<Props> = ({ navigation, isMobile = false }) => {
  const getColumnsContent = (items: NavigationItemEntity[]) =>
    items.map((item, itemIndex) => (
      // eslint-disable-next-line react/no-array-index-key
      <FooterColumn key={itemIndex}>
        {item.map(({ link, name }) => (
          <FooterColumnItem key={name}>
            <FooterLink href={link}>{name}</FooterLink>
            {appendSpecialLink(name)}
          </FooterColumnItem>
        ))}
      </FooterColumn>
    ));

  return (
    <FooterLinksWrapper>
      {navigation.map(({ navigationTitle, items }) =>
        isMobile ? (
          <FooterAccordion key={navigationTitle}>
            <FooterAccordionHead>{navigationTitle}</FooterAccordionHead>
            <AccordionBody>
              <FooterColumns>{getColumnsContent(items)}</FooterColumns>
            </AccordionBody>
          </FooterAccordion>
        ) : (
          <div key={navigationTitle}>
            <FooterListTitle>{navigationTitle}</FooterListTitle>
            <FooterColumns>{getColumnsContent(items)}</FooterColumns>
          </div>
        ),
      )}
    </FooterLinksWrapper>
  );
};

export default FooterLinks;
