import { HeaderContent } from 'types/header';
import {
  guidesList,
  popularSearches,
  popularSearchesTitle,
  emptySearchResult,
  loginUrl,
  testAccountUrl,
} from 'mocks/headerSection';

export const getHeaderContent = async (): Promise<HeaderContent> => {
  return new Promise((resolve) =>
    resolve({
      guides: guidesList,
      popularSearches,
      popularSearchesTitle,
      emptySearchResult,
      testAccountUrl,
      loginUrl,
    }),
  );
};
