/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC } from 'react';
import { ThemeDefaultProvider } from '@cko/primitives';

const withStaticTheme =
  (Component: FC<any>, theme: Record<string, any>): FC =>
  (props) =>
    (
      <ThemeDefaultProvider theme={theme}>
        <Component {...props} />
      </ThemeDefaultProvider>
    );

export default withStaticTheme;
