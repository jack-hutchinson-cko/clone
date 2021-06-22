import { FC } from 'react';

import { HeaderLogo as Logo } from 'components/Icons';
import { Container } from './HeaderLogo.styles';

type Props = {
  onClick?: () => void;
};

const HeaderLogo: FC<Props> = ({ onClick }) => (
  <Container onClick={onClick}>
    <Logo />
    <div>Documentation</div>
  </Container>
);

export default HeaderLogo;
