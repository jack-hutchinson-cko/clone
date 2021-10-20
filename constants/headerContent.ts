import {
  guidesList,
  popularSearches,
  popularSearchesTitle,
  emptySearchResult,
  testAccountUrl,
  loginUrlByClientType,
  loginTitleByClientType,
} from 'mocks/headerSection';

import { CLIENT_TYPE } from './clientSettings';

export const headerContent = {
  guides: guidesList,
  popularSearches,
  popularSearchesTitle,
  emptySearchResult,
  testAccountUrl,
  loginUrl: loginUrlByClientType[CLIENT_TYPE as 'ABC' | 'NAS'],
  loginTitle: loginTitleByClientType[CLIENT_TYPE as 'ABC' | 'NAS'],
};
