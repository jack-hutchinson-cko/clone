import { createContext } from 'react';

export type Props = {
  onSelect?: (hash: string) => void;
  selectedHref?: string;
  areaHeight?: number;
  offsetTop?: number;
};

export default createContext<Props>({});
