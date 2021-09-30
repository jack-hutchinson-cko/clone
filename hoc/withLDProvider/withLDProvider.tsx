import { FC } from 'react';
import { LDProvider } from 'launchdarkly-react-client-sdk';

const withLDProvider = <T,>(Component: FC<T>): FC<T> => {
  return (props) => {
    return (
      <LDProvider clientSideID={String(process.env.NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_ID)}>
        <Component {...props} />
      </LDProvider>
    );
  };
};

export default withLDProvider;
