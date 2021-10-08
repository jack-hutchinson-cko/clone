import { useState, useEffect, FC } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { useRouter } from 'next/router';
import { InstantSearch, Configure } from 'react-instantsearch-dom';

import { DocsHits, HiddenSearchInput, SearchResultHeader, Pagination } from 'components/Search';
import { ApplicationID, AdminAPIKey } from 'constants/algoliasearch';
import { clientSettings } from 'constants/clientSettings';
import { HitMode, QueryType } from 'types/search';
import { PageContent } from 'styles/index.styles';
import useFilterSettings from 'hooks/useFilterSettings';

const searchClient = algoliasearch(ApplicationID, AdminAPIKey);

const SearchPage: FC = () => {
  const router = useRouter();
  const [searchState, setSearchState] = useState<QueryType>(router.query as QueryType);
  const { filterSettings } = useFilterSettings();

  useEffect(() => {
    setSearchState(router.query as QueryType);
  }, [router.query]);

  return (
    <PageContent>
      <InstantSearch
        searchState={searchState}
        searchClient={searchClient}
        indexName={clientSettings.searchIndexName}
      >
        <Configure filters={filterSettings} />
        <SearchResultHeader
          searchResult={searchState.query || ''}
          currentPage={Number(searchState.page) || 1}
        />
        <HiddenSearchInput />
        <DocsHits mode={HitMode.PAGE} />
        <Pagination searchState={searchState} baseUrlRederection="/search" />
      </InstantSearch>
    </PageContent>
  );
};

export default SearchPage;
