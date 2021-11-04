import { FC } from 'react';
import { ThemeDefaultProvider } from '@cko/primitives';

import useTheme from 'src/hooks/useTheme';
import { themes } from 'src/constants/themes';
import { ThemeVariantType } from 'src/types/theme';
import { ThemeContext } from './themeContext';

export const ThemeProvider: FC<{ defaultTheme?: ThemeVariantType }> = ({
  children,
  defaultTheme,
}) => {
  const themeData = useTheme(defaultTheme);

  return (
    <ThemeDefaultProvider theme={themes[themeData.theme]}>
      <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
    </ThemeDefaultProvider>
  );
};
