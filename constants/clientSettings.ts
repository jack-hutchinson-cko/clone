import path from 'path';

export const CLIENT_TYPE = process.env.NEXT_PUBLIC_CLIENT_TYPE || 'ABC';

export const CLIENT_SETTINGS_BY_TYPE = {
  ABC: {
    docArticlesFilePath: 'docs/ABC/Articles',
    FAQFilePath: 'docs/ABC/FAQ',
    searchIndexName: 'ABC_DOCS',
    searchFAQIndexName: 'ABC_FAQ',
    fullFilePath: path.join(process.cwd(), 'docs/ABC/Articles'),
    changelogPath: path.join(process.cwd(), 'docs/ABC/Changelog/index.mdx'),
    homePagePath: path.join(process.cwd(), 'docs/ABC/Home/index.mdx'),
    fullFaqPath: path.join(process.cwd(), 'docs/ABC/FAQ'),
  },
  NAS: {
    docArticlesFilePath: 'docs/NAS/Articles',
    FAQFilePath: 'docs/NAS/FAQ',
    searchIndexName: 'NAS_DOCS',
    searchFAQIndexName: 'NAS_FAQ',
    fullFilePath: path.join(process.cwd(), 'docs/NAS/Articles'),
    changelogPath: path.join(process.cwd(), 'docs/NAS/Changelog/index.mdx'),
    homePagePath: path.join(process.cwd(), 'docs/NAS/Home/index.mdx'),
    fullFaqPath: path.join(process.cwd(), 'docs/NAS/FAQ'),
  },
};

export const clientSettings = CLIENT_SETTINGS_BY_TYPE[CLIENT_TYPE as 'ABC' | 'NAS'];
