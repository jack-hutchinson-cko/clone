import { FC } from 'react';

import { IconSearch, IconClose } from 'components/Icons';
import { Button } from './SearchButton.styles';

type Props = {
  onClick: () => void;
  isActive?: boolean;
};

const SearchButton: FC<Props> = ({ isActive, onClick }) => (
  <Button onClick={onClick}>{isActive ? <IconClose /> : <IconSearch />}</Button>
);

export default SearchButton;
