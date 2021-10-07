import path from 'path';

export const CLIENT_TYPE = process.env.NEXT_PUBLIC_CLIENT_TYPE || 'ABC';

export const CLIENT_SETTINGS_BY_TYPE = {
  ABC: {
    docArticlesFilePath: 'docs/ABC/Articles',
    FAQFilePath: 'docs/ABC/FAQ',
    searchIndexName: 'ABC_DOCS',
    searchFAQIndexName: 'ABC_FAQ',
    fullFilePath: path.join(process.cwd(), 'docs/ABC/Articles'),
    whatsNewPath: path.join(process.cwd(), 'docs/ABC/WhatsNew/index.mdx'),
    homePagePath: path.join(process.cwd(), 'docs/ABC/Home/index.mdx'),
    fullFaqPath: path.join(process.cwd(), 'docs/ABC/FAQ'),
    FAQPageEnable: true,
    NASBannerShown: false,
  },
  NAS: {
    docArticlesFilePath: 'docs/NAS/Articles',
    FAQFilePath: '',
    searchIndexName: 'NAS_DOCS',
    searchFAQIndexName: '',
    fullFilePath: path.join(process.cwd(), 'docs/NAS/Articles'),
    whatsNewPath: path.join(process.cwd(), 'docs/NAS/WhatsNew/index.mdx'),
    homePagePath: path.join(process.cwd(), 'docs/NAS/Home/index.mdx'),
    fullFaqPath: '',
    FAQPageEnable: false,
    NASBannerShown: true,
  },
};

export const publicDir = path.join(process.cwd(), 'public');

export const clientSettings = CLIENT_SETTINGS_BY_TYPE[CLIENT_TYPE as 'ABC' | 'NAS'];
