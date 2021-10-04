import { FC } from 'react';
import { Container, Logo } from './HeaderLogo.styles';

type Props = {
  onClick?: () => void;
};

const HeaderLogo: FC<Props> = ({ onClick }) => (
  <Container onClick={onClick}>
    <Logo src="assets/images/Logo.svg" />
    <div>Documentation</div>
  </Container>
);

export default HeaderLogo;
