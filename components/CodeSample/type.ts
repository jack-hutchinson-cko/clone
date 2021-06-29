import Highlight, { Language } from 'prism-react-renderer';

export type CodeSampleProps = {
  code: string;
  language: Language;
  isCollapsible: boolean;
};

type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};

export type PreLineProps = {
  tokens: Token[][];
  getLineProps: Highlight['getLineProps'];
  getTokenProps: Highlight['getTokenProps'];
  isCollapsible: boolean;
};
