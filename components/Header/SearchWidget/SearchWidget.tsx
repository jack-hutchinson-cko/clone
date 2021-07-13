import { FC, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useMatchMedia } from '@cko/primitives';
import algoliasearch from 'algoliasearch/lite';
import Link from 'next/link';
import { InstantSearch } from 'react-instantsearch-dom';
import { withMenuState, WithMenuStateProps } from 'components/MenuStateProvider';
import { DocsHits, SearchBox } from 'components/Search';
import { ApplicationID, AdminAPIKey, ABC_DOCS_INDEX_NAME } from 'constants/algoliasearch';
import { IconActionArrowRight } from 'components/Icons';
import Outside from 'components/Outside';
import { SearchResultLink } from 'types/header';
import { Breakpoints } from 'constants/screen';
import {
  TextFieldWrapper,
  Results,
  PopularSearches,
  SearchesTitle,
  PopularSearchesItem,
  ButtonContainer,
  ResultItemsContainer,
  StyledLink,
  Button,
} from './SearchWidget.styles';

type Props = {
  isMobile?: boolean;
  popularSearches: SearchResultLink[];
  emptySearchResult: string;
  popularSearchesTitle: string;
};

const searchClient = algoliasearch(ApplicationID, AdminAPIKey);
const INITIAL_SEARCH_STATE = { query: '', page: 1 };

const SearchWidget: FC<WithMenuStateProps<Props>> = ({
  popularSearches,
  popularSearchesTitle,
  onChangeSearchState,
}) => {
  const router = useRouter();
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  const [searchState, setSearchState] = useState(INITIAL_SEARCH_STATE);

  const searchUrl = `/search?query=${searchState.query}&page=1`;

  const onCloseSearchPanel = useCallback(() => {
    onChangeSearchState(false);
    setSearchState(INITIAL_SEARCH_STATE);
  }, [setSearchState, onChangeSearchState]);

  const onOutsideClick = useCallback(() => {
    setSearchState(INITIAL_SEARCH_STATE);
  }, [setSearchState]);

  const onSubmitHandler = useCallback(() => {
    router.push(searchUrl);
    onCloseSearchPanel();
  }, [router, searchUrl, onCloseSearchPanel]);

  const showResults = Boolean(searchState.query);

  return (
    <Outside onOutsideClick={onOutsideClick}>
      {(refToElement) => (
        <TextFieldWrapper ref={refToElement} isMobile={isMobile}>
          <InstantSearch
            searchClient={searchClient}
            indexName={ABC_DOCS_INDEX_NAME}
            searchState={searchState}
            onSearchStateChange={setSearchState}
          >
            <SearchBox onSubmit={onSubmitHandler} />
            <Results isShown={isMobile || showResults}>
              {showResults && (
                <ResultItemsContainer>
                  <SearchesTitle>Search result</SearchesTitle>
                  <DocsHits mode="header" maxHitsNumber={4} onClickHit={onCloseSearchPanel}>
                    <ButtonContainer>
                      <StyledLink href={searchUrl}>
                        <Button onClick={onCloseSearchPanel}>View all search results</Button>
                      </StyledLink>
                    </ButtonContainer>
                  </DocsHits>
                </ResultItemsContainer>
              )}
              <PopularSearches>
                <SearchesTitle>{popularSearchesTitle}</SearchesTitle>
                {popularSearches.map(({ title, url }) => (
                  <Link key={title} href={url} passHref>
                    <PopularSearchesItem target="_blank">
                      {title} <IconActionArrowRight />
                    </PopularSearchesItem>
                  </Link>
                ))}
              </PopularSearches>
            </Results>
          </InstantSearch>
        </TextFieldWrapper>
      )}
    </Outside>
  );
};

export default withMenuState(SearchWidget) as FC<Props>;
