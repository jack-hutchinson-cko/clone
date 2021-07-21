import { useState, useEffect, FC } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { useRouter } from 'next/router';
import { InstantSearch } from 'react-instantsearch-dom';
import { DocsHits, HiddenSearchInput, SearchResultHeader, Pagination } from 'components/Search';
import { ApplicationID, AdminAPIKey } from 'constants/algoliasearch';
import { clientSettings } from 'constants/clientSettings';
import { QueryType } from 'components/Search/types';
import { PageContent } from 'styles/index.styles';

const searchClient = algoliasearch(ApplicationID, AdminAPIKey);

const SearchPage: FC = () => {
  const router = useRouter();
  const [searchState, setSearchState] = useState<QueryType>(router.query as QueryType);

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
        <SearchResultHeader
          searchResult={searchState.query || ''}
          currentPage={Number(searchState.page) || 1}
        />
        <HiddenSearchInput />
        <DocsHits mode="page" />
        <Pagination searchState={searchState} />
      </InstantSearch>
    </PageContent>
  );
};

export default SearchPage;
