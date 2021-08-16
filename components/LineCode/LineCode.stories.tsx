import { Story, Meta } from '@storybook/react';

import LineCode from '.';

export const LineCodeStore: Story = ({ children }) => {
  return <LineCode>{children}</LineCode>;
};

LineCodeStore.storyName = 'LineCode';

export default {
  title: 'LineCode',
  component: LineCode,
  args: {
    children: 'Example text',
  },
} as Meta;
