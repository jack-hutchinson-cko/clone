import { FC, ReactNode } from 'react';

import { Container, Content, Footer } from './ExtraLinks.styles';

type Props = {
  footerChildren?: ReactNode;
  withMobileSize?: boolean;
};

export const ExtraLinks: FC<Props> = ({ children, footerChildren, withMobileSize }) => (
  <Container withMobileSize={withMobileSize}>
    <Content>{children}</Content>
    {footerChildren && <Footer>{footerChildren}</Footer>}
  </Container>
);
