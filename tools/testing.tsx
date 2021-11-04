import { ReactNode } from 'react';

import { ThemeProvider } from 'src/theme/ThemeProvider';

export const convertSVGToImageUrl = (svgString: string): string => {
  const blob = new Blob([svgString], { type: 'image/svg+xml' });
  return URL.createObjectURL(blob);
};

export const withThemeWrapper = (children: ReactNode): ReactNode => (
  <ThemeProvider>{children}</ThemeProvider>
);
