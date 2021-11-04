/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { spacing } from 'src/constants/spacingSize';
import { Wrapper } from './styles';

type Settings = {
  spacing: number;
};

const defaultSettings = {
  spacing: spacing.s70,
};

const withBlockBottomMargin =
  <T,>(Component: FC<T>, settings: Settings = defaultSettings): FC<T> =>
  (props) =>
    (
      <Wrapper spacing={settings.spacing}>
        <Component {...props} />
      </Wrapper>
    );

export default withBlockBottomMargin;
