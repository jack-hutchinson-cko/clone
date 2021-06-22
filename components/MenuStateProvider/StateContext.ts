import { createContext } from 'react';

const initialValue = {
  menuState: false,
  onChangeMenuState: () => {},
  searchState: false,
  onChangeSearchState: () => {},
};

export type Props = {
  menuState: boolean;
  onChangeMenuState: (state: boolean) => void;
  searchState: boolean;
  onChangeSearchState: (state: boolean) => void;
};

export default createContext<Props>(initialValue);
