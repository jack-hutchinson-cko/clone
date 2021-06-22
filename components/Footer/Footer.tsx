import { FC } from 'react';
import { useMatchMedia } from '@cko/primitives';

import { NavigationList, PoliciesList, SocialList } from 'types/footer';
import { Breakpoints } from 'constants/screen';
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
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  const isTablet = useMatchMedia(Breakpoints.TABLET);

  return (
    <FooterWrapper>
      <FooterContainer isMobile={isMobile}>
        <FooterLogo />
        <FooterLinks navigation={navigation} isMobile={isMobile} />
        <SubFooter policies={policies} social={social} isTablet={isTablet} isMobile={isMobile} />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
