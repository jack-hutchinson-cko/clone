import React, { FC } from 'react';

import { PoliciesList, SocialList } from 'types/footer';
import FooterLink from '../FooterLink';
import SubFooterLinks from './SubFooterLinks';
import SubFooterSocialLinks from './SubFooterSocialLinks';

import {
  SubFooterWrapper,
  SubFooterGridItem,
  SubFooterTitle,
  SubFooterDescription,
} from './SubFooter.styles';

type Props = {
  policies: PoliciesList;
  social: SocialList;
  isTablet: boolean;
  isMobile: boolean;
};

const SubFooter: FC<Props> = ({ social, policies, isMobile, isTablet }) => {
  const currentYear = new Date().getFullYear();

  return (
    <SubFooterWrapper>
      <SubFooterGridItem isMobile={isMobile} isTablet={isTablet}>
        <SubFooterTitle>© {currentYear} Checkout.com</SubFooterTitle>
        <SubFooterLinks policies={policies} isMobile={isMobile} />
      </SubFooterGridItem>
      <SubFooterGridItem isMobile={isMobile}>
        <SubFooterDescription isMobile={isMobile}>
          <p>
            Authorised and regulated as an electronic money institution by the UK Financial Conduct
            Authority under number 900816.
          </p>
          <p>
            <span>Powered by&nbsp;</span>
            <FooterLink href="https://www.atlassian.com" underline>
              <strong>Atlassian Confluence</strong>
            </FooterLink>
            <span>&nbsp;and&nbsp;</span>
            <FooterLink href="https://www.k15t.com/go/scroll-viewport" underline>
              <strong>Scroll Viewport</strong>
            </FooterLink>
          </p>
        </SubFooterDescription>
        <SubFooterSocialLinks social={social} isMobile={isMobile} />
      </SubFooterGridItem>
    </SubFooterWrapper>
  );
};

export default SubFooter;
