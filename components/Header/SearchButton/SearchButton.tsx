import { FC } from 'react';
import { IconSearch, IconClose } from 'components/Icons';
import { Button } from './SearchButton.styles';

const buttonStyles = { width: '26', height: '26px' };

type Props = {
  onClick: () => void;
  isActive?: boolean;
};

const SearchButton: FC<Props> = ({ isActive, onClick }) => (
  <Button onClick={onClick}>
    {isActive ? <IconClose style={buttonStyles} /> : <IconSearch style={buttonStyles} />}
  </Button>
);

export default SearchButton;
