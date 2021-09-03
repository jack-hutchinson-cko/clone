import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { useRouter } from 'next/router';
import { InstantSearch } from 'react-instantsearch-dom';
import { NextPage, GetStaticProps } from 'next';
import { FAQHits, HiddenSearchInput, SearchResultHeader, Pagination } from 'components/Search';
import FAQSearchWidget from 'components/Search/FAQSearchWidget';
import { ApplicationID, AdminAPIKey } from 'constants/algoliasearch';
import { clientSettings } from 'constants/clientSettings';
import { HitMode } from 'types/search';
import { ContentWrapper, SectionContent } from 'components/FAQStyledComponents';

const searchClient = algoliasearch(ApplicationID, AdminAPIKey);

const FAQSearchPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <SectionContent>
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
          <Pagination searchState={router.query} baseUrlRederection="/faq/search" />
        </InstantSearch>
      </ContentWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      isFAQSection: true,
    },
  };
};

export default FAQSearchPage;
