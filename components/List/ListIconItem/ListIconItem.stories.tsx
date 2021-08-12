import { Story, Meta } from '@storybook/react';

import { List } from '..';
import ListIconItem from '.';

export const ListIconItemStory: Story = () => {
  return (
    <List>
      <ListIconItem type="check">
        While you&#39;re still working on your website or app.
      </ListIconItem>
      <ListIconItem type="info">As an alternative to hosting your own payment form.</ListIconItem>
      <ListIconItem type="error">
        In parallel with your existing online integration as another way to reach your customers.
      </ListIconItem>
      <ListIconItem>
        While you&#39;re still working on your website or app. In parallel with your existing online
        integration as another way to reach your customers.
      </ListIconItem>
    </List>
  );
};

ListIconItemStory.storyName = 'List with IconItem';

export default {
  title: 'List',
  component: ListIconItem,
} as Meta;
