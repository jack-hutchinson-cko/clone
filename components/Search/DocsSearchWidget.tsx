import React, { FC } from 'react';
import Link from 'next/link';

import SearchWidget from 'components/Header/SearchWidget';
import { SearchResultLink } from 'types/header';
import { IconActionArrowRight } from 'components/Icons';
import { HitMode } from 'types/search';
import { clientSettings } from 'constants/clientSettings';
import {
  SearchesTitle,
  PopularSearches,
  PopularSearchesItem,
  ButtonContainer,
  Button,
  StyledLink,
} from './DocsSearchWidget.styles';
import DocsHits from './DocsHits';

type Props = {
  isMobile?: boolean;
  emptySearchResult?: string;
  popularSearches?: SearchResultLink[];
  popularSearchesTitle?: string;
};

const MAX_DOCS_HITS_NUMBER = 4;

const DocsSearchWidget: FC<Props> = ({ popularSearches = [], popularSearchesTitle, ...props }) => {
  return (
    <SearchWidget
      baseUrlRederection="/search"
      baseIndexName={clientSettings.searchIndexName}
      renderHits={({ searchUrl, onCloseSearchPanel }) => (
        <DocsHits
          mode={HitMode.HEADER}
          maxHitsNumber={MAX_DOCS_HITS_NUMBER}
          onClickHit={onCloseSearchPanel}
        >
          <ButtonContainer>
            <StyledLink href={searchUrl}>
              <Button onClick={onCloseSearchPanel}>View all search results</Button>
            </StyledLink>
          </ButtonContainer>
        </DocsHits>
      )}
      searchesTitleComponent={<SearchesTitle>Search result</SearchesTitle>}
      popularSearchesComponent={
        <PopularSearches>
          <SearchesTitle>{popularSearchesTitle}</SearchesTitle>
          {popularSearches.map(({ title, url }) => (
            <Link key={title} href={url} passHref>
              <PopularSearchesItem>
                {title} <IconActionArrowRight />
              </PopularSearchesItem>
            </Link>
          ))}
        </PopularSearches>
      }
      {...props}
    />
  );
};

export default DocsSearchWidget;
