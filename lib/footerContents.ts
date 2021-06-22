import { FooterContent } from 'types/footer';
import { policies, social, navigation } from 'mocks/footerSection';

export const getFooterContent = async (): Promise<FooterContent> => {
  return new Promise((resolve) =>
    resolve({
      policies,
      social,
      navigation,
    }),
  );
};
