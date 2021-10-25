import { FC, ReactNode } from 'react';
import { Container, Divider } from './LoginWidget.styles';

type Props = {
  gap?: number;
  dividerText?: string;
  link: ReactNode;
  alternativeLink: ReactNode;
};

const LoginWidget: FC<Props> = ({ link, alternativeLink, gap, dividerText }) => {
  return (
    <Container gap={gap}>
      {link}
      {dividerText && <Divider>{dividerText}</Divider>}
      {alternativeLink}
    </Container>
  );
};

export default LoginWidget;
