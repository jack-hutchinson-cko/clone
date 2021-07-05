export type HighlightResultItem = {
  fullyHighlighted: boolean;
  matchLevel: string;
  matchedWords: string[];
  value: string;
};

export type DocHit = {
  body: string;
  name: string;
  objectID: string;
  parentArticles: string[];
  path: string;
  title: string;
  __position: number;
  _highlightResult: {
    body: HighlightResultItem;
    name: HighlightResultItem;
    path: HighlightResultItem;
    title: HighlightResultItem;
  };
};

export type QueryType = { query: string; page: string };
