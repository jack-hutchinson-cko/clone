import { Story, Meta } from '@storybook/react';

import { List, UnorderedList, OrderedList, ListItem } from '.';

export const ListStory: Story = () => {
  return (
    <List>
      <ListItem>From the date you received the request.</ListItem>
      <ListItem>
        Failure to respond to a retrieval request within this time may result in a formal dispute.
      </ListItem>
      <ListItem>From the date you received the dispute.</ListItem>
      <ListItem>
        You have five days to contact our Disputes Team at disputes@checkout.com if want to take
        your case to arbitration.
      </ListItem>
    </List>
  );
};

ListStory.storyName = 'List';

export const UnorderedListStory: Story = () => {
  return (
    <UnorderedList>
      <ListItem>Onboard a sub-entity</ListItem>
      <ListItem>Update a sub-entity</ListItem>
      <ListItem>Retrieve a sub-entity</ListItem>
      <ListItem>Handle due diligence notifications</ListItem>
      <ListItem>Testing</ListItem>
    </UnorderedList>
  );
};

UnorderedListStory.storyName = 'UnorderedList';

export const OrderedListStory: Story = () => {
  return (
    <OrderedList>
      <ListItem>Internet Explorer (IE11+) and Edge</ListItem>
      <ListItem>Chrome, Safari and Firefox on all devices</ListItem>
    </OrderedList>
  );
};

OrderedListStory.storyName = 'OrderedList';

export default {
  title: 'List',
  component: List,
} as Meta;
