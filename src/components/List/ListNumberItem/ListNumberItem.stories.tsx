import { Story, Meta } from '@storybook/react';

import { List } from '..';
import ListNumberItem from '.';

export const ListNumberItemStory: Story = () => {
  return (
    <List>
      <ListNumberItem number={1}>Request a session</ListNumberItem>
      <ListNumberItem number={2}>Get session details</ListNumberItem>
      <ListNumberItem number={3}>Issuer fingerprint (browser only)</ListNumberItem>
      <ListNumberItem number={4}>Collect channel data</ListNumberItem>
      <ListNumberItem number={5}>Challenge (browser only)</ListNumberItem>
    </List>
  );
};

ListNumberItemStory.storyName = 'List with NumberItem';

export default {
  title: 'List',
  component: ListNumberItem,
} as Meta;
