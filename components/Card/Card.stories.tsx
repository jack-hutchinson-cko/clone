import { Story, Meta } from '@storybook/react';
import { Props } from './types';
import Card from './Card';

export const CardStory: Story<Props & { content: string }> = ({ content, ...args }) => {
  return <Card {...args}>{content}</Card>;
};

CardStory.args = {
  title: 'Accept payments',
  href: '/',
  content:
    'Request payments with new and stored card details, and process different types of authorization.',
};

export default {
  title: 'Card',
  component: Card,
} as Meta;
