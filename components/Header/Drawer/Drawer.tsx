import { FC } from 'react';

import { Container, Background, Content } from './Drawer.styles';

type Props = {
  onClose: () => void;
  isMobile?: boolean;
};

const Drawer: FC<Props> = ({ children, isMobile, onClose }) => {
  return (
    <Container isMobile={isMobile}>
      <Background onClick={onClose} />
      <Content>{children}</Content>
    </Container>
  );
};

export default Drawer;
