import { FC, useContext } from 'react';

import StateContext, { Props } from './StateContext';

export type StateProps<T> = Props & T;

const withState =
  <T,>(Component: FC<T>): FC<T> =>
  (props) => {
    const { menuState, onChangeMenuState, searchState, onChangeSearchState } =
      useContext(StateContext);

    return (
      <Component
        menuState={menuState}
        onChangeMenuState={onChangeMenuState}
        searchState={searchState}
        onChangeSearchState={onChangeSearchState}
        {...props}
      />
    );
  };

export default withState;
