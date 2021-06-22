import { FC, useState, useCallback } from 'react';

import Context, { Props as ContextProps } from './StateContext';

const StateProvider: FC = ({ children }) => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const [searchState, setSearchState] = useState<boolean>(false);

  const onChangeMenuState = useCallback((value: boolean) => {
    setMenuState(value);
    setSearchState(false);
  }, []);

  const onChangeSearchState = useCallback((value: boolean) => {
    setSearchState(value);
    setMenuState(false);
  }, []);

  const value: ContextProps = {
    menuState,
    searchState,
    onChangeMenuState,
    onChangeSearchState,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default StateProvider;
