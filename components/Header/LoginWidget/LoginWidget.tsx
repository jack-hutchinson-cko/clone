import { FC, ReactNode } from 'react';
import { Container, Divider } from './LoginWidget.styles';

type Props = {
  isMobile?: boolean;
  gap?: number;
  dividerText?: string;
  link: ReactNode;
  alternativeLink: ReactNode;
};

const LoginWidget: FC<Props> = ({ isMobile, link, alternativeLink, gap, dividerText }) => {
  return (
    <Container isMobile={isMobile} gap={gap}>
      {link}
      {dividerText && <Divider>{dividerText}</Divider>}
      {alternativeLink}
    </Container>
  );
};

export default LoginWidget;
