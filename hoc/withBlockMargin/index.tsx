/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { Wrapper } from './styles';

type Settings = {
  margin?: {
    top: number;
    bottom: number;
  };
};

const defaultSettings = {
  margin: {
    top: 20,
    bottom: 20,
  },
};

const withBlockMargin =
  (Component: FC<any>, { margin }: Settings = defaultSettings): FC =>
  (props) =>
    (
      <Wrapper margin={margin}>
        <Component {...props} />
      </Wrapper>
    );

export default withBlockMargin;
