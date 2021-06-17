import { FC, ReactNode } from 'react';

import { Container, Background, Content, Top, Bottom } from './Drawer.styles';

type Props = {
  onClose: () => void;
  isMobile?: boolean;
  bottomContent?: ReactNode;
};

const Drawer: FC<Props> = ({ children, isMobile, onClose, bottomContent }) => {
  return (
    <Container isMobile={isMobile}>
      <Background onClick={onClose} />
      <Content>
        <Top>{children}</Top>
        {bottomContent && <Bottom>{bottomContent}</Bottom>}
      </Content>
    </Container>
  );
};

export default Drawer;
