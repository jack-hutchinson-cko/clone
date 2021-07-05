/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Header, Mark, HeaderContainer } from './SearchResultHeader.styles';
import SearchStatus from './SearchStatus';

type Props = {
  searchResult: string;
};

const SearchResultHeader: FC<Props> = ({ searchResult }) => {
  return (
    <HeaderContainer>
      <Header>
        Results for "<Mark>{searchResult}</Mark>"
      </Header>
      <SearchStatus />
    </HeaderContainer>
  );
};

export default SearchResultHeader;
