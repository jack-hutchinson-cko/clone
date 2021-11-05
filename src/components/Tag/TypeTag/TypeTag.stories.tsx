import { Story, Meta } from '@storybook/react';
import { TypeTag } from '../Tag';
import { TypeTagProps } from '../types';

export const TypeTagStory: Story<TypeTagProps> = ({ type }) => {
  return <TypeTag type={type} />;
};

TypeTagStory.storyName = 'TypeTag';
TypeTagStory.args = {
  type: 'integer',
};

export default {
  title: 'Tag',
  component: TypeTag,
} as Meta;
