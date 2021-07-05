import { FC } from 'react';
import { connectPagination } from 'react-instantsearch-dom';
import { IconActionArrowRight, IconActionArrowLeft } from '@cko/icons';
import Link from 'next/link';
import { PaginatorContainer, LinkContainer } from './Paginator.styles';
import { QueryType } from './types';

type Props = {
  currentRefinement: number;
  nbPages: number;
  searchState: QueryType;
};

const Pagination: FC<Props> = ({ currentRefinement, nbPages, searchState }) => {
  const nextLink =
    currentRefinement < nbPages
      ? `/search?query=${searchState.query}&page=${currentRefinement + 1}`
      : '';

  const prevLink =
    currentRefinement > 1 ? `/search?query=${searchState.query}&page=${currentRefinement - 1}` : '';

  return (
    <PaginatorContainer>
      <LinkContainer>
        {prevLink ? (
          <>
            <IconActionArrowLeft />
            <Link href={prevLink}>
              <a href={prevLink}>Previous</a>
            </Link>
          </>
        ) : null}
      </LinkContainer>
      <LinkContainer>
        {nextLink ? (
          <>
            <Link href={nextLink}>
              <a href={nextLink}>Next</a>
            </Link>
            <IconActionArrowRight />
          </>
        ) : null}
      </LinkContainer>
    </PaginatorContainer>
  );
};

export default connectPagination(Pagination);
