import { Story, Meta } from '@storybook/react';
import Select, { Option } from '.';

export const SelectStory: Story = () => {
  return (
    <Select>
      <Option title="Faster payments (GBP)">Example 1</Option>
      <Option title="CHAPS (GBP)">Example 2</Option>
      <Option title="SEPA (EUR)">Example 3</Option>
    </Select>
  );
};

SelectStory.storyName = 'Select';

export default {
  title: 'Select',
  components: Select,
} as Meta;
