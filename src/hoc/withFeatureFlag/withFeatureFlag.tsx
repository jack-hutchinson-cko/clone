import { FC } from 'react';
import { useFlags } from 'launchdarkly-react-client-sdk';

import { DocPostProps } from 'src/types/docpage';

const withFeatureFlag = <T,>(Component: FC<T>): FC<DocPostProps & T> => {
  return (props) => {
    const { docsIntegrationBuilderFrames } = useFlags();
    const { isIntegrationBuilder } = props;
    const isRedirectToErrorPage = !docsIntegrationBuilderFrames && isIntegrationBuilder;
    return <Component {...props} isRedirectToErrorPage={isRedirectToErrorPage} />;
  };
};

export default withFeatureFlag;
