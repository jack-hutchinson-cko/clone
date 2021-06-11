import { FC } from 'react';
import { IconSearch, IconClose } from 'components/Icons';
import { Button } from './SearchButton.styles';

type Props = {
  onClick?: () => void;
  isActive?: boolean;
};

const SearchButton: FC<Props> = ({ isActive, onClick }) => (
  <Button onClick={onClick}>
    {isActive ? (
      <IconClose style={{ width: '26', height: '26px' }} />
    ) : (
      <IconSearch style={{ width: '26', height: '26px' }} />
    )}
  </Button>
);

export default SearchButton;
