import { FC } from 'react';

import { NavigationList, PoliciesList, SocialList } from 'src/types/footer';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import SubFooter from './SubFooter';

import { FooterWrapper, FooterContainer } from './Footer.styles';

type Props = {
  navigation: NavigationList;
  social: SocialList;
  policies: PoliciesList;
};

const Footer: FC<Props> = ({ navigation, policies, social }) => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogo />
        <FooterLinks navigation={navigation} />
        <SubFooter policies={policies} social={social} />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
