import { FC } from 'react';
import { ThemeDefaultProvider } from '@cko/primitives';

import useTheme from 'hooks/useTheme';
import { themes } from 'constants/themes';
import { ThemeContext } from './themeContext';

export const ThemeProvider: FC = ({ children }) => {
  const themeData = useTheme();

  return (
    <ThemeDefaultProvider theme={themes[themeData.theme]}>
      <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
    </ThemeDefaultProvider>
  );
};
