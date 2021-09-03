export type SelectedBlockType = {
  tab?: string;
  lines?: number[];
  id?: number;
};

export type SelectedFramework = {
  frontEnd: string;
  backEnd: string;
};

export type RegisterDescriptionElementType = {
  blockItemRef: {
    current: null | HTMLDivElement;
  };
  blockItem: SelectedBlockType;
};
