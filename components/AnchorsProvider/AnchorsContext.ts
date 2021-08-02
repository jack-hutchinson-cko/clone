import { createContext } from 'react';

const defaultValue = {
  onUpdateState: () => {},
  shownAnchors: [],
  initialized: false,
  offsetTop: 0,
};

export type Props = {
  onUpdateState: (hash: string, state: boolean) => void;
  shownAnchors: string[];
  initialized: boolean;
  offsetTop: number;
};

export default createContext<Props>(defaultValue);
