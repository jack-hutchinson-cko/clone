import { FC } from 'react';

export type HeaderLink = {
  title: string;
  Icon: FC<unknown>;
  url?: string;
  description?: string;
};

export type SearchResultLink = {
  url: string;
  title: string;
};

export type HeaderContent = {
  guides: HeaderLink[];
  popularSearches: SearchResultLink[];
  popularSearchesTitle: string;
  emptySearchResult: string;
  testAccountUrl: string;
  loginTopUrl: string;
  loginBottomUrl: string;
  loginTitle: string;
};
