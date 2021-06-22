import { ThemeDefaultProvider } from '@cko/primitives';
import { defaultTheme } from '../constants/theme';
import * as nextImage from 'next/image';

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
    <ThemeDefaultProvider theme={defaultTheme}>
      <Story />
    </ThemeDefaultProvider>
  ),
];
