/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Header, Mark, HeaderContainer } from './SearchResultHeader.styles';
import SearchStatus from './SearchStatus';

type Props = {
  searchResult: string;
  currentPage: number;
};

const SearchResultHeader: FC<Props> = ({ searchResult, currentPage }) => {
  return (
    <HeaderContainer>
      <Header>
        Results for "<Mark>{searchResult}</Mark>"
      </Header>
      <SearchStatus currentPage={currentPage} />
    </HeaderContainer>
  );
};

export default SearchResultHeader;
