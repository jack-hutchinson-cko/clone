import { FC } from 'react';
import { SearchBox } from 'react-instantsearch-dom';
import { HiddenContainer } from './HiddenSearchInput.styles';

const HiddenSearchInput: FC = () => {
  return (
    <HiddenContainer>
      <SearchBox />
    </HiddenContainer>
  );
};

export default HiddenSearchInput;
