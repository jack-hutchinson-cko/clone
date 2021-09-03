import React, { FC } from 'react';

import SearchWidget from 'components/Header/SearchWidget';
import { HitMode } from 'types/search';
import { clientSettings } from 'constants/clientSettings';
import { SearchesTitle } from './FAQSearchWidget.styles';
import FAQHits from './FAQHits';

const MAX_FAQ_HITS_NUMBER = 5;

const FAQSearchWidget: FC = ({ ...props }) => {
  return (
    <SearchWidget
      isFAQSection
      baseUrlRederection="/faq/search"
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
