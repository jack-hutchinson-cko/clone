import * as nextImage from 'next/image';

import { ThemeProvider } from '../theme/ThemeProvider';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  controls: { expanded: true },
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
