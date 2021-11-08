import { FC } from 'react';
import Button from 'src/components/Button';
import { HeaderContainer, Header } from './WhatsNew.styles';

type Props = {
  displaySubscribe: boolean;
  title: string;
};

const WhatsNewHeader: FC<Props> = ({ title, displaySubscribe }) => (
  <HeaderContainer>
    <Header>{title}</Header>
    {displaySubscribe && (
      <Button as="a" size="large" variant="primary" href="#subscribe">
        Subscribe to updates
      </Button>
    )}
  </HeaderContainer>
);

export default WhatsNewHeader;
