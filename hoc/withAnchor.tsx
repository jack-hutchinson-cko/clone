import { FC } from 'react';
import { toString } from 'lodash';
import { getAnchorUrl } from 'lib/url';

const withAnchor = (Component: FC): FC => {
  return (props) => {
    const { children } = props;
    const anchorUrl = getAnchorUrl(toString(children)) || '';

    return (
      <>
        <span name={anchorUrl.replace('#', '')} />
        <Component {...props} />
      </>
    );
  };
};

export default withAnchor;
