import { useState, useEffect, FC } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { DocsHits, HiddenSearchInput, SearchResultHeader, Pagination } from 'src/components/Search';
import { ApplicationID, AdminAPIKey } from 'src/constants/algoliasearch';
import { clientSettings } from 'src/constants/clientSettings';
import { HitMode, QueryType } from 'src/types/search';
import { PageContent } from 'styles/index.styles';
import useFilterSettings from 'src/hooks/useFilterSettings';
import { getDocsSidebarDocLinks } from 'src/lib/fileParser';
import withMainLayout from 'src/hoc/withMainLayout';

const searchClient = algoliasearch(ApplicationID, AdminAPIKey);

const SearchPage: FC = () => {
  const router = useRouter();
  const [searchState, setSearchState] = useState<QueryType>(router.query as QueryType);
  const { filterSettings } = useFilterSettings();
  const query = searchState.query || searchState.q;

  useEffect(() => {
    setSearchState(router.query as QueryType);
  }, [router.query]);

  return (
    <PageContent id="main">
      <InstantSearch
        searchState={searchState}
        searchClient={searchClient}
        indexName={clientSettings.searchIndexName}
      >
        <Configure filters={filterSettings} />
        <SearchResultHeader
          searchResult={query || ''}
          currentPage={Number(searchState.page) || 1}
        />
        <HiddenSearchInput />
        <DocsHits mode={HitMode.PAGE} />
        <Pagination searchState={searchState} baseUrlRedirection="/search" />
      </InstantSearch>
    </PageContent>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const sidebarDocLinks = getDocsSidebarDocLinks();

  return {
    props: {
      sidebarDocLinks,
    },
  };
};

export default withMainLayout(SearchPage);
