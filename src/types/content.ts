export enum DocContentItemType {
  TEXT = 'TEXT',
  ANCHOR = 'ANCHOR',
}

export type DocContentItem = {
  data: string;
  params: { anchorHref?: string };
  type: DocContentItemType;
  id: number;
};

export type DocContent<T = unknown> = Omit<DocContentItem, 'type'> & T;

export type DocItem = {
  name: string;
  url: string;
  id: number;
  parentId: number | null;
  content: DocContentItem[];
};

export type DocItemWithParentNodes = DocItem & {
  parentsNodes: Array<DocItem>;
};

export type BreadCrumbsItems = Array<{ name: string; url: string }>;

export type DocsPathItem = {
  params: {
    docsPathParams: string[];
  };
};

export enum ContentPageType {
  PAGE = 'page',
  SECTION = 'section',
}

export type ContentPageData = { title: string; account: string; description?: string };