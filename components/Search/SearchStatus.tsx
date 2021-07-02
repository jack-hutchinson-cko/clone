import { FC } from 'react';
import { connectStats } from 'react-instantsearch-dom';

type Props = {
  nbHits: number;
};

const SearchStatus: FC<Props> = ({ nbHits }) => {
  return <div>{nbHits} results</div>;
};

export default connectStats(SearchStatus);
