import { FC, useContext } from 'react';

import Context, { Props as ContextProps } from './AnchorsContext';

export type WithAnchorListenerProps<T> = {
  selectedAnchorHref?: string;
} & T;

const withAnchorListener =
  <T,>(Component: FC<T>): FC<WithAnchorListenerProps<T>> =>
  (props) => {
    const { selectedHref } = useContext<ContextProps>(Context);

    return <Component selectedAnchorHref={selectedHref} {...props} />;
  };

export default withAnchorListener;
