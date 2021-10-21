import {
  guidesList,
  popularSearches,
  popularSearchesTitle,
  emptySearchResult,
  testAccountUrl,
  loginTopUrlByClientType,
  loginBottomUrlByClientType,
  loginTitleByClientType,
} from 'mocks/headerSection';

import { CLIENT_TYPE } from './clientSettings';

export const headerContent = {
  guides: guidesList,
  popularSearches,
  popularSearchesTitle,
  emptySearchResult,
  testAccountUrl,
  loginTopUrl: loginTopUrlByClientType[CLIENT_TYPE as 'ABC' | 'NAS'],
  loginBottomUrl: loginBottomUrlByClientType[CLIENT_TYPE as 'ABC' | 'NAS'],
  loginTitle: loginTitleByClientType[CLIENT_TYPE as 'ABC' | 'NAS'],
};
