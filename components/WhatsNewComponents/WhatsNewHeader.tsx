import { FC } from 'react';
import { HeaderContainer, Header, Button } from './WhatsNew.styles';

type Props = {
  title: string;
};

const ChangelogHeader: FC<Props> = ({ title }) => {
  return (
    <HeaderContainer>
      <Header>{title}</Header>
      <Button href="#subscribe">
        <div>Subscribe to updates</div>
      </Button>
    </HeaderContainer>
  );
};

export default ChangelogHeader;
