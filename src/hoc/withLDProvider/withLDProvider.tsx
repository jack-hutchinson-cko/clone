import { FC } from 'react';
import { LDProvider } from 'launchdarkly-react-client-sdk';

const withLDProvider = <T,>(Component: FC<T>): FC<T> => {
  return (props) => {
    let ldProps = {};

    if (process.env.NEXT_PUBLIC_DOCS_INTEGRATION_BUILDER_FRAMES === 'true') {
      ldProps = { flags: { docsIntegrationBuilderFrames: true } };
    }

    return (
      <LDProvider
        clientSideID={String(process.env.NEXT_PUBLIC_LAUNCHDARKLY_CLIENT_ID)}
        {...ldProps}
      >
        <Component {...props} />
      </LDProvider>
    );
  };
};

export default withLDProvider;
