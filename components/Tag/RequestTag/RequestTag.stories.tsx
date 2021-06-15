import { Story, Meta } from '@storybook/react';
import { RequestTag } from '../Tag';
import { RequestTagProps } from '../types';

export const RequestTagStory: Story<RequestTagProps> = ({ type }) => {
  return <RequestTag type={type} />;
};

RequestTagStory.storyName = 'RequestTag';
RequestTagStory.args = {
  type: 'get',
};

export default {
  title: 'Tag',
  component: RequestTag,
} as Meta;
