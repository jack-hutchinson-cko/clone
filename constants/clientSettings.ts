import path from 'path';

export const CLIENT_TYPE = process.env.NEXT_PUBLIC_CLIENT_TYPE || 'ABC';

export const CLIENT_SETTINGS_BY_TYPE = {
  ABC: {
    docArticlesFilePath: 'docs/ABC',
    searchIndexName: 'ABC_DOCS',
    fullFilePath: path.join(process.cwd(), 'docs/ABC'),
  },
  NAS: {
    docArticlesFilePath: 'docs/NAS',
    searchIndexName: 'NAS_DOCS',
    fullFilePath: path.join(process.cwd(), 'docs/NAS'),
  },
};

export const clientSettings = CLIENT_SETTINGS_BY_TYPE[CLIENT_TYPE as 'ABC' | 'NAS'];
