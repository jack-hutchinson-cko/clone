import { useState, useEffect, FC } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { InstantSearch, Configure } from 'react-instantsearch-dom';
import { DocsHits, HiddenSearchInput, SearchResultHeader, Pagination } from 'components/Search';
import { ApplicationID, AdminAPIKey } from 'constants/algoliasearch';
import { clientSettings } from 'constants/clientSettings';
import { HitMode, QueryType } from 'types/search';
import { PageContent } from 'styles/index.styles';
import useFilterSettings from 'hooks/useFilterSettings';
import { getDocsSidebarDocLinks } from 'lib/fileParser';
import withMainLayout from 'hoc/withMainLayout';

const searchClient = algoliasearch(ApplicationID, AdminAPIKey);

const SearchPage: FC = () => {
  const router = useRouter();
  const [searchState, setSearchState] = useState<QueryType>(router.query as QueryType);
  const { filterSettings } = useFilterSettings();

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
          searchResult={searchState.query || ''}
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
