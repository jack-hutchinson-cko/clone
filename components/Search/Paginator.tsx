import { FC } from 'react';
import { connectPagination } from 'react-instantsearch-dom';
import Link from 'next/link';
import { QueryType } from 'types/search';
import { PaginatorContainer, LinkContainer, ArrowLeft, ArrowRight } from './Paginator.styles';

type Props = {
  currentRefinement: number;
  nbPages: number;
  searchState: QueryType;
  baseUrlRederection: string;
};

const Pagination: FC<Props> = ({ currentRefinement, nbPages, searchState, baseUrlRederection }) => {
  if (!nbPages) {
    return null;
  }

  const nextLink =
    currentRefinement < nbPages
      ? `${baseUrlRederection}?query=${searchState.query}&page=${currentRefinement + 1}`
      : '';

  const prevLink =
    currentRefinement > 1
      ? `${baseUrlRederection}?query=${searchState.query}&page=${currentRefinement - 1}`
      : '';

  return (
    <PaginatorContainer>
      <LinkContainer>
        {prevLink ? (
          <>
            <ArrowLeft />
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
            <ArrowRight />
          </>
        ) : null}
      </LinkContainer>
    </PaginatorContainer>
  );
};

export default connectPagination(Pagination);
