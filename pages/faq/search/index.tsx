import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { useRouter } from 'next/router';
import { InstantSearch } from 'react-instantsearch-dom';
import { NextPage } from 'next';
import { FAQHits, HiddenSearchInput, SearchResultHeader, Pagination } from 'src/components/Search';
import FAQSearchWidget from 'src/components/Search/FAQSearchWidget';
import { ApplicationID, AdminAPIKey } from 'src/constants/algoliasearch';
import { clientSettings } from 'src/constants/clientSettings';
import { HitMode } from 'src/types/search';
import { ContentWrapper, SectionContent } from 'src/components/FAQStyledComponents';
import withMainLayout from 'src/hoc/withMainLayout';

const searchClient = algoliasearch(ApplicationID, AdminAPIKey);

const FAQSearchPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <SectionContent id="main">
        <ContentWrapper>
          <FAQSearchWidget />
        </ContentWrapper>
      </SectionContent>
      <ContentWrapper>
        <InstantSearch
          searchState={router.query}
          searchClient={searchClient}
          indexName={clientSettings.searchFAQIndexName}
        >
          <SearchResultHeader
            searchResult={String(router.query.query) || ''}
            currentPage={Number(router.query.page) || 1}
          />
          <HiddenSearchInput />
          <FAQHits mode={HitMode.PAGE} itemId={router.query.item?.toString() || null} />
          <Pagination searchState={router.query} baseUrlRedirection="/faq/search" />
        </InstantSearch>
      </ContentWrapper>
    </>
  );
};

export default withMainLayout(FAQSearchPage, { isFAQSection: true });
