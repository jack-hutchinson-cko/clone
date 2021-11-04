import { createContext } from 'react';

const defaultValue = {
  selectedHref: '',
};

export type Props = {
  selectedHref: string;
};

export default createContext<Props>(defaultValue);
