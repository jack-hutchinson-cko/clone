import { Story, Meta } from '@storybook/react';
import { Props } from './types';
import Card from './Card';

export const CardStoryDefault: Story<Props & { content: string }> = ({ content, ...args }) => {
  return <Card {...args}>{content}</Card>;
};

CardStoryDefault.storyName = 'CardDefault';
CardStoryDefault.args = {
  title: 'Accept payments',
  href: '/',
  content:
    'Request payments with new and stored card details, and process different types of authorization.',
};

export const CardStoryMedia: Story<Props & { content: string }> = ({ content, ...args }) => {
  return (
    <Card variant="media" {...args}>
      {content}
    </Card>
  );
};

CardStoryMedia.storyName = 'CardMedia';
CardStoryMedia.args = {
  title: 'Onboard sub-entities',
  href: '/',
  imgSrc: '/NAS/Marketplaces/onboard-sub-entities.svg',
  content:
    'Request payments with new and stored card details, and process different types of authorization.',
};

export default {
  title: 'Card',
  component: Card,
} as Meta;
