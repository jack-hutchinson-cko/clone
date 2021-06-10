import { Story, Meta } from '@storybook/react';
import CodeSample, { Props } from './CodeSample';

const Template: Story<Props> = (args) => <CodeSample {...args} />;

export const CodeSampleStory = Template.bind({});

CodeSampleStory.args = {
  code: `
  {
    "source": {
      "type": "network_token",
      "token": "4242424242424242",
      "token_type": "vts",
      "expiry_month": "10",
      "expiry_year": "2025",
      "eci": "06",
      "cryptogram": "AgAAAAAAAIR8CQrXcIhbQAAAAAA"
    },
    "amount": 1000,
    "currency": "USD"
  }
    `,
  language: 'json',
};

export default {
  title: 'CodeSample',
  component: CodeSample,
} as Meta;
