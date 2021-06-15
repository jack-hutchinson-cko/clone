import { Story, Meta } from '@storybook/react';
import { StatusTag } from '../Tag';
import { StatusTagProps } from '../types';

export const StatusTagStory: Story<StatusTagProps> = ({ type }) => {
  return <StatusTag type={type} />;
};

StatusTagStory.storyName = 'StatusTag';
StatusTagStory.args = {
  type: 'optional',
};

export default {
  title: 'Tag',
  component: StatusTag,
} as Meta;
