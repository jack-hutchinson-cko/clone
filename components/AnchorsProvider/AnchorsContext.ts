import { createContext } from 'react';

export type Props = {
  onUpdateState?: (hash: string, state: boolean) => void;
  shownAnchors?: string[];
  offsetTop?: number;
};

export default createContext<Props>({});
