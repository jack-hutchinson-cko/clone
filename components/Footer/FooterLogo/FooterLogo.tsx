import React, { FC } from 'react';

import { FooterLogo as Logo } from 'components/Icons';
import FooterLink from '../FooterLink';

import { Container } from './FooterLogo.styles';

const FooterLogo: FC = () => {
  return (
    <Container>
      <FooterLink href="/">
        <Logo />
      </FooterLink>
    </Container>
  );
};

export default FooterLogo;
