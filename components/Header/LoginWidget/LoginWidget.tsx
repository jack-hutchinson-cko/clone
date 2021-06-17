import { FC, ReactNode } from 'react';

import { Container, Divider } from './LoginWidget.styles';

type Props = {
  gap?: number;
  isMobile?: boolean;
  dividerText?: string;
  link: ReactNode;
  alternativeLink: ReactNode;
};

const LoginWidget: FC<Props> = ({ link, alternativeLink, isMobile, gap, dividerText }) => (
  <Container isMobile={isMobile} gap={gap}>
    {link}
    {dividerText && <Divider>{dividerText}</Divider>}
    {alternativeLink}
  </Container>
);

export default LoginWidget;
