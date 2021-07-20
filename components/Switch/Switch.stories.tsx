import { Story, Meta } from '@storybook/react';
import Switch from './Switch';

export const SwitchStory: Story = () => {
  const switchHandler = () => {};

  return <Switch onChange={switchHandler} />;
};

export default {
  title: 'Switch',
  component: Switch,
} as Meta;
