import { Story, Meta } from '@storybook/react';
import { List, UnorderedList, OrderedList, ListItem } from '@cko/primitives';

export const ListStory: Story = () => {
  return (
    <List>
      <ListItem>Internet Explorer (IE11+) and Edge</ListItem>
      <ListItem>Chrome, Safari and Firefox on all devices</ListItem>
    </List>
  );
};

export const UnorderedListStory: Story = () => {
  return (
    <UnorderedList>
      <ListItem>Internet Explorer (IE11+) and Edge</ListItem>
      <ListItem>Chrome, Safari and Firefox on all devices</ListItem>
    </UnorderedList>
  );
};

export const OrderedListStory: Story = () => {
  return (
    <OrderedList>
      <ListItem>Internet Explorer (IE11+) and Edge</ListItem>
      <ListItem>Chrome, Safari and Firefox on all devices</ListItem>
    </OrderedList>
  );
};

export default {
  title: 'List',
  component: List,
} as Meta;
