import Highlight, { Language } from 'prism-react-renderer';

export type CodeSampleProps = {
  code: string;
  language: Language;
  isCollapsible: boolean;
  withBorder: boolean;
  isEditMode: boolean;
  selectedLines?: number[];
};

export type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};

export type PreLineProps = {
  tokens: Token[][];
  getLineProps: Highlight['getLineProps'];
  getTokenProps: Highlight['getTokenProps'];
  isCollapsible: boolean;
  withBorder: boolean;
  editorComponent: JSX.Element | null;
  isEditMode: boolean;
  selectedLines?: number[];
};
