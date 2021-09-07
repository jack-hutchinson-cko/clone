import { FC, useContext } from 'react';
import Context, { Props as ContextProps } from './AnchorsContext';

export type WithAnchorListenerProps<T> = {
  selectedHref: string;
} & T;

const withAnchorListener =
  <T,>(Component: FC<WithAnchorListenerProps<T>>): FC<T> =>
  (props) => {
    const { selectedHref } = useContext<ContextProps>(Context);
    return <Component selectedHref={selectedHref} {...props} />;
  };

export default withAnchorListener;
