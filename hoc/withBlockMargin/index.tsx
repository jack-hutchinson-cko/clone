import { FC } from 'react';
import { Wrapper } from './styles';

const withBlockMargin =
  // eslint-disable-next-line
  (Component: FC<any>): FC =>
    (props) =>
      (
        <Wrapper>
          <Component {...props} />
        </Wrapper>
      );

export default withBlockMargin;
