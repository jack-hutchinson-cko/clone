/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { Wrapper } from './styles';

const withBlockMargin =
  (Component: FC<any>): FC =>
  (props) =>
    (
      <Wrapper>
        <Component {...props} />
      </Wrapper>
    );

export default withBlockMargin;
