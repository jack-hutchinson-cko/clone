import { FC } from 'react';
import Button from 'components/Button';
import { HeaderContainer, Header } from './WhatsNew.styles';

type Props = {
  title: string;
};

const WhatsNewHeader: FC<Props> = ({ title }) => {
  return (
    <HeaderContainer>
      <Header>{title}</Header>
      <Button as="a" size="large" variant="primary" href="#subscribe">
        Subscribe to updates
      </Button>
    </HeaderContainer>
  );
};

export default WhatsNewHeader;
