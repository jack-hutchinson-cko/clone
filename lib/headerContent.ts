import { HeaderContent } from 'types/header';
import { guidesList } from 'mocks/headerSection';

export const getHeaderContent = async (): Promise<HeaderContent> => {
  return new Promise((resolve) => resolve({ guides: guidesList }));
};
