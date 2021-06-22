import { FC, useContext } from 'react';

import Context, { Props as ContextProps } from './AnchorsContext';

export type WithAnchorListenerProps<T> = {
  shownAnchors?: string;
} & T;

const withAnchorListener =
  <T,>(Component: FC<T>): FC<WithAnchorListenerProps<T>> =>
  (props) => {
    const { shownAnchors } = useContext<ContextProps>(Context);

    return <Component shownAnchors={shownAnchors} {...props} />;
  };

export default withAnchorListener;
