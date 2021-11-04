import { Story, Meta } from '@storybook/react';
import ButtonLink, { Props } from './ButtonLink';

export const ButtonLinkStory: Story<Props & { content: string }> = ({ content, ...args }) => {
  return <ButtonLink {...args}>{content}</ButtonLink>;
};

ButtonLinkStory.args = {
  href: 'https://assets.checkout.com/docs/downloads/multi_iframes_new.zip',
  content: 'Download sample files (.zip)',
};

export default {
  title: 'ButtonLink',
  component: ButtonLink,
} as Meta;
