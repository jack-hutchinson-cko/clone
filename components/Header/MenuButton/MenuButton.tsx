import { FC } from 'react';
import { Button } from './MenuButton.styles';

type Props = {
  onClick: () => void;
  isActive?: boolean;
};

const MenuButton: FC<Props> = ({ isActive, onClick }) => (
  <Button isActive={isActive} onClick={onClick}>
    <span />
  </Button>
);

export default MenuButton;
