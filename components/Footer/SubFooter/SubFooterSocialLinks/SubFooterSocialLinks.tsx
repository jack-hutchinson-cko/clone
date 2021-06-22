import React, { FC } from 'react';
import FooterLink from 'components/Footer/FooterLink';
import { SocialList } from 'types/footer';

import FooterSocialIcon from './FooterSocialIcon';
import { SubFooterSocialLinksWrapper } from './SubFooterSocialLinks.styles';

type Props = {
  social: SocialList;
  isMobile: boolean;
};

const SubFooterSocialLinks: FC<Props> = ({ social, isMobile }) => {
  return (
    <SubFooterSocialLinksWrapper isMobile={isMobile}>
      {social.map(({ link, title, iconName }) => (
        <li key={title}>
          <FooterLink href={link} title={title} external>
            <FooterSocialIcon iconName={iconName} />
          </FooterLink>
        </li>
      ))}
    </SubFooterSocialLinksWrapper>
  );
};

export default SubFooterSocialLinks;
