import { createContext } from 'react';

const defaultValue = {
  offsetTop: 0,
  selectedHref: '',
};

export type Props = {
  offsetTop: number;
  selectedHref: string;
};

export default createContext<Props>(defaultValue);
