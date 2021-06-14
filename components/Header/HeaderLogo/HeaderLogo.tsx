import { FC } from 'react';

import { HeaderLogo as Logo } from 'components/Icons';
import { Container } from './HeaderLogo.styles';

const HeaderLogo: FC = () => (
  <Container>
    <Logo />
    <div>Documentation</div>
  </Container>
);

export default HeaderLogo;
