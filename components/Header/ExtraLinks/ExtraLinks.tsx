import { FC, ReactNode } from 'react';

import { Container, Content, Footer } from './ExtraLinks.styles';

type Props = {
  footerChildren?: ReactNode;
  isMobile?: boolean;
};

export const ExtraLinks: FC<Props> = ({ children, footerChildren, isMobile }) => (
  <Container isMobile={isMobile}>
    <Content>{children}</Content>
    {footerChildren && <Footer>{footerChildren}</Footer>}
  </Container>
);
