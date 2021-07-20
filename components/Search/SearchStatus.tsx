import { FC } from 'react';
import { connectStats } from 'react-instantsearch-dom';
import { SearchStatusContainer } from './SearchResultHeader.styles';

type Props = {
  nbHits: number;
  currentPage: number;
};

const HITS_ON_PAGE = 20;

const SearchStatus: FC<Props> = ({ nbHits, currentPage }) => {
  if (!nbHits) {
    return null;
  }

  const firstItem = (currentPage - 1) * HITS_ON_PAGE;
  const lastItem = Math.min(currentPage * HITS_ON_PAGE, nbHits);

  return (
    <SearchStatusContainer>
      Showing {firstItem} - {lastItem} of {nbHits} results
    </SearchStatusContainer>
  );
};

export default connectStats(SearchStatus);
