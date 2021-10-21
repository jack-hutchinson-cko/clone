import { FC } from 'react';
import { Wrapper } from './styles';

const withYOverflow =
  (Component: FC): FC =>
  (props) =>
    (
      <Wrapper>
        <Component {...props} />
      </Wrapper>
    );

export default withYOverflow;
