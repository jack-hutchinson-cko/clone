import React, { FC } from 'react';
import Link from 'next/link';

import SearchWidget from 'src/components/Header/SearchWidget';
import { SearchResultLink } from 'src/types/header';
import { IconActionArrowRight } from 'src/components/Icons';
import Button from 'src/components/Button';
import { HitMode } from 'src/types/search';
import { clientSettings } from 'src/constants/clientSettings';
import {
  SearchesTitle,
  PopularSearches,
  PopularSearchesItem,
  ButtonContainer,
  StyledLink,
} from './DocsSearchWidget.styles';
import DocsHits from './DocsHits';

type Props = {
  emptySearchResult?: string;
  popularSearches?: SearchResultLink[];
  popularSearchesTitle?: string;
  onLinkClick: () => void;
};

const MAX_DOCS_HITS_NUMBER = 4;

const DocsSearchWidget: FC<Props> = ({
  popularSearches = [],
  popularSearchesTitle,
  onLinkClick,
  ...props
}) => {
  return (
    <SearchWidget
      baseUrlRedirection="/search"
      baseIndexName={clientSettings.searchIndexName}
      renderHits={({ searchUrl, onCloseSearchPanel }) => (
        <DocsHits
          mode={HitMode.HEADER}
          maxHitsNumber={MAX_DOCS_HITS_NUMBER}
          onClickHit={onCloseSearchPanel}
        >
          <ButtonContainer>
            <StyledLink href={searchUrl}>
              <Button variant="primary" size="small" onClick={onCloseSearchPanel}>
                View all search results
              </Button>
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
              <PopularSearchesItem onClick={onLinkClick}>
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