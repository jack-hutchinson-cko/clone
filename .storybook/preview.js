import { ThemeDefaultProvider } from '@cko/primitives';
import { defaultTheme } from '../constants/theme';

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
