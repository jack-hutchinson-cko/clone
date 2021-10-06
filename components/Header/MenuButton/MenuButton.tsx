import { FC } from 'react';
import { Button, Wrapper } from './MenuButton.styles';

type Props = {
  onClick: () => void;
  isActive?: boolean;
};

const MenuButton: FC<Props> = ({ isActive, onClick }) => (
  <Wrapper>
    <Button isActive={isActive} onClick={onClick}>
      <span />
    </Button>
  </Wrapper>
);

export default MenuButton;
