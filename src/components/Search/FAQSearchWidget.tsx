import React, { FC } from 'react';

import SearchWidget from 'src/components/Header/SearchWidget';
import { HitMode } from 'src/types/search';
import { clientSettings } from 'src/constants/clientSettings';
import { SearchesTitle } from './FAQSearchWidget.styles';
import FAQHits from './FAQHits';

const MAX_FAQ_HITS_NUMBER = 5;

const FAQSearchWidget: FC = ({ ...props }) => {
  return (
    <SearchWidget
      isFAQSection
      baseUrlRedirection="/faq/search"
      baseIndexName={clientSettings.searchFAQIndexName}
      renderHits={({ searchUrl, onCloseSearchPanel }) => (
        <FAQHits
          mode={HitMode.HEADER}
          maxHitsNumber={MAX_FAQ_HITS_NUMBER}
          onClickHit={onCloseSearchPanel}
          queryLink={searchUrl}
        />
      )}
      searchesTitleComponent={<SearchesTitle>Results</SearchesTitle>}
      {...props}
    />
  );
};

export default FAQSearchWidget;
