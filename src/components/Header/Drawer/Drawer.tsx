import { FC } from 'react';

import { Container, Background, Content } from './Drawer.styles';

type Props = {
  onClose: () => void;
};

const Drawer: FC<Props> = ({ children, onClose }) => {
  return (
    <Container>
      <Background onClick={onClose} />
      <Content>{children}</Content>
    </Container>
  );
};

export default Drawer;
