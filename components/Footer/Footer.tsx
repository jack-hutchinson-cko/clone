import { FunctionComponent } from 'react';
import Link from 'next/link';
import { FooterLogo } from '../Icons/Icons';
import FooterLinksComponent from './FooterLinks';
import SubfooterLinksComponent from './SubfooterLinks';
import SubfooterSocialLinksComponent from './SubfooterSocialLinks';
import {
  FooterBackground,
  FooterMain,
  FooterIcon,
  FooterLogoWrapper,
  FooterLinkListContainer,
  SubFooter,
  SubfooterGridItem,
  SubfooterDescription,
  SubfooterDescriptionText,
  ContainerSubfooterLink,
  DescriptionLink,
} from './Footer.styles';

const FooterComponent: FunctionComponent = () => {
  return (
    <footer>
      <FooterBackground>
        <FooterMain>
          <FooterIcon>
            <FooterLogoWrapper>
              <Link href="/">
                <div>
                  <FooterLogo />
                </div>
              </Link>
            </FooterLogoWrapper>
          </FooterIcon>
          <FooterLinkListContainer>
            <FooterLinksComponent />
          </FooterLinkListContainer>
          <SubFooter>
            <SubfooterLinksComponent />
            <SubfooterGridItem>
              <SubfooterDescription>
                <SubfooterDescriptionText>
                  Authorised and regulated as an electronic money institution by the UK Financial
                  Conduct Authority under number 900816.
                </SubfooterDescriptionText>
                <ContainerSubfooterLink>
                  <span>Powered by&nbsp;</span>
                  <Link href="https://www.atlassian.com">
                    <DescriptionLink href="https://www.atlassian.com">
                      Atlassian Confluence
                    </DescriptionLink>
                  </Link>
                  <span>&nbsp;and&nbsp;</span>
                  <Link href="https://www.k15t.com/go/scroll-viewport">
                    <DescriptionLink href="https://www.k15t.com/go/scroll-viewport">
                      Scroll Viewport
                    </DescriptionLink>
                  </Link>
                </ContainerSubfooterLink>
              </SubfooterDescription>
              <SubfooterSocialLinksComponent />
            </SubfooterGridItem>
          </SubFooter>
        </FooterMain>
      </FooterBackground>
    </footer>
  );
};
export default FooterComponent;
