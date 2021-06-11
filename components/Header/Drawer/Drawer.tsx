import { FC } from 'react';

import { Container, Content, Background } from './Drawer.styles';

export type Props = {
  onClose?: () => void;
  autoSize?: boolean;
};

const Drawer: FC<Props> = ({ children, autoSize, onClose }) => {
  return (
    <Container>
      <Background onClick={onClose} />
      <Content autoSize={autoSize}>{children}</Content>
    </Container>
  );
};

export default Drawer;
