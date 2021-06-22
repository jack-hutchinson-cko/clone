import { Story, Meta } from '@storybook/react';
import TipBox from './TipBox';
import { TipBoxProps } from './types';

export const TipBoxStory: Story<TipBoxProps & { content: string }> = ({ content, ...args }) => {
  return <TipBox {...args}>{content}</TipBox>;
};

TipBoxStory.storyName = 'TipBox';
TipBoxStory.args = {
  title: 'Example Title',
  variant: 'tip',
  content:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis amet assumenda similique excepturi magni error!',
};

export default {
  title: 'TipBox',
  component: TipBox,
} as Meta;
