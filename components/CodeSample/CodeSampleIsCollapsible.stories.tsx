import { Story, Meta } from '@storybook/react';
import CodeSample from './CodeSample';
import { CodeSampleProps } from './type';

const Template: Story<CodeSampleProps> = (args) => <CodeSample {...args} />;

export const CodeSampleStory = Template.bind({});

CodeSampleStory.args = {
  code: `import { Checkout } from 'checkout-node-sdk';
  const cko = new Checkout('sk_XXXX');
  const disputes = await cko.disputes.get({
    limit: 5,
    id: 'dsp_bc94ebda8d275i461229',
  });`,
  language: 'javascript',
  isCollapsible: false,
};

export default {
  title: 'CodeSampleIsCollapsible',
  component: CodeSample,
} as Meta;
