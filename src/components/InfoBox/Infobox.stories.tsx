import { Story, Meta } from '@storybook/react';
import InfoBox from './InfoBox';

export const InfoBoxStory: Story<{ text: string }> = ({ text }) => {
  return <InfoBox>{text}</InfoBox>;
};

InfoBoxStory.storyName = 'InfoBox';
InfoBoxStory.args = {
  text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, similique?',
};

export default {
  title: 'InfoBox',
  component: InfoBox,
} as Meta;
