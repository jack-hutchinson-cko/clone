import { FC } from 'react';

import { RequestTag } from '../Tag';
import { RequestTagProps } from '../Tag/types';
import { StyledLineCodeWrapper } from './LineCodeWrapper.styles';

const LineCodeWrapper: FC<RequestTagProps> = ({ type, children, ...props }) => {
  return (
    <StyledLineCodeWrapper {...props}>
      <div>
        <RequestTag type={type} />
      </div>
      {children}
    </StyledLineCodeWrapper>
  );
};

export default LineCodeWrapper;
