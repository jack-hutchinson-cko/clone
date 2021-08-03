import { FC, useContext } from 'react';

import Context, { Props as ContextProps } from './AnchorsContext';

export type WithAnchorListenerProps<T> = {
  shownAnchors: string[];
  initialized: boolean;
} & T;

const withAnchorListener =
  <T,>(Component: FC<WithAnchorListenerProps<T>>): FC<T> =>
  (props) => {
    const { shownAnchors, initialized } = useContext<ContextProps>(Context);
    return <Component shownAnchors={shownAnchors} initialized={initialized} {...props} />;
  };

export default withAnchorListener;
