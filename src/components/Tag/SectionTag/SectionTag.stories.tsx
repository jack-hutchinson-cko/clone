import { Story, Meta } from '@storybook/react';
import { SectionTag } from '../Tag';
import { SectionTagProps } from '../types';

export const SectionTagStory: Story<SectionTagProps> = ({ title, url }) => {
  return <SectionTag title={title} url={url} />;
};

SectionTagStory.storyName = 'SectionTag';
SectionTagStory.args = {
  title: 'Example title',
  url: 'https://docs.checkout.com',
};

export default {
  title: 'Tag',
  component: SectionTag,
} as Meta;
