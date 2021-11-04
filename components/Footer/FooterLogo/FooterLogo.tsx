import React, { FC } from 'react';

import { FooterLogo as Logo } from 'components/Icons';
import FooterLink from '../FooterLink';

import { Container } from './FooterLogo.styles';

const FooterLogo: FC = () => {
  return (
    <Container>
      <FooterLink href="/">
        <Logo aria-label="Checkout.com" />
      </FooterLink>
    </Container>
  );
};

export default FooterLogo;
