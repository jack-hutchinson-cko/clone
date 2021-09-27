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

export type ControlType = 'select' | 'multiSelect';
export type ControlOptionType = 'frameColorSelector' | 'frameFontSizeSelector';
export type SelectOptionType = {
  option: string;
  codeVariables: string[];
};
export type ControlValueType = {
  selectedOption: string;
  tab: string;
  optionValue: string;
  optionType: ControlOptionType;
  lines: number[];
  insertedRowsCount: number;
};

export type CodeControlStateType = {
  [key: string]: ControlValueType;
};

export type MediaFilesType = { name: string; src: string }[];
