import { FC } from 'react';
import { ThemeDefaultProvider } from '@cko/primitives';

import useTheme from 'hooks/useTheme';
import { themes } from 'constants/themes';
import { ThemeVariantType } from 'types/theme';
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
