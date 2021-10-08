import { FC, useState, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useMatchMedia } from '@cko/primitives';
import algoliasearch from 'algoliasearch/lite';
import { Configure, InstantSearch } from 'react-instantsearch-dom';

import { withMenuState, WithMenuStateProps } from 'components/MenuStateProvider';
import { SearchBox } from 'components/Search';
import { ApplicationID, AdminAPIKey } from 'constants/algoliasearch';
import Outside from 'components/Outside';
import { Breakpoints } from 'constants/screen';
import useFilterSettings from 'hooks/useFilterSettings';
import { TextFieldWrapper, Results, ResultItemsContainer } from './SearchWidget.styles';

const searchClient = algoliasearch(ApplicationID, AdminAPIKey);
const INITIAL_SEARCH_STATE = { query: '', page: 1 };

type SearchWidgetProps = {
  isFAQSection?: boolean;
  baseUrlRederection?: string;
  baseIndexName: string;
  searchesTitleComponent: ReactNode;
  popularSearchesComponent?: ReactNode;
  renderHits: (args: { searchUrl: string; onCloseSearchPanel: () => void }) => ReactNode;
};

const SearchWidget: FC<WithMenuStateProps<SearchWidgetProps>> = ({
  isFAQSection = false,
  baseIndexName = '',
  baseUrlRederection = '/search',
  searchesTitleComponent,
  popularSearchesComponent,
  renderHits,
  onChangeSearchState,
}) => {
  const router = useRouter();
  const { filterSettings } = useFilterSettings();
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  const [searchState, setSearchState] = useState(INITIAL_SEARCH_STATE);

  const searchUrl = `${baseUrlRederection}?query=${searchState.query}&page=1`;

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
            indexName={baseIndexName}
            searchState={searchState}
            onSearchStateChange={setSearchState}
          >
            <Configure filters={filterSettings} />
            <SearchBox isFAQSection={isFAQSection} onSubmit={onSubmitHandler} />
            <Results isShown={isMobile || showResults}>
              {showResults && (
                <ResultItemsContainer>
                  {searchesTitleComponent}
                  {renderHits({ searchUrl, onCloseSearchPanel })}
                </ResultItemsContainer>
              )}
              {popularSearchesComponent}
            </Results>
          </InstantSearch>
        </TextFieldWrapper>
      )}
    </Outside>
  );
};

export default withMenuState(SearchWidget) as FC<SearchWidgetProps>;
