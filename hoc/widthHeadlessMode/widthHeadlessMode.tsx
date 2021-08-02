import { FC, ReactNode } from 'react';

type WithLoadingProps = {
  isHeadlessMode: boolean;
  children: ReactNode;
};

const withHeadlessMode = <T,>(Component: FC<T>): FC<WithLoadingProps & T> => {
  return (props) => {
    const { isHeadlessMode, children, ...rest } = props as WithLoadingProps;
    if (isHeadlessMode) return <>{children}</>;
    return <Component {...(rest as T)}>{children}</Component>;
  };
};

export default withHeadlessMode;
