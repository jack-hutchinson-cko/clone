import { Story, Meta } from '@storybook/react';
import Iframe, { Props } from './Iframe';

export const IframeStory: Story<Props> = (args) => {
  return <Iframe {...args} />;
};

IframeStory.storyName = 'Iframe';
IframeStory.args = {
  title: 'docs-checkout',
  src: 'https://docs.checkout.com/',
  width: '500px',
  height: '500px',
};

export default {
  title: 'Iframe',
  component: Iframe,
} as Meta;
