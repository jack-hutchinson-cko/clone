import React, { FC } from 'react';
import FooterLink from 'src/components/Footer/FooterLink';
import { SocialList } from 'src/types/footer';

import FooterSocialIcon from './FooterSocialIcon';
import { SubFooterSocialLinksWrapper } from './SubFooterSocialLinks.styles';

type Props = {
  social: SocialList;
};

const SubFooterSocialLinks: FC<Props> = ({ social }) => {
  return (
    <SubFooterSocialLinksWrapper>
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
