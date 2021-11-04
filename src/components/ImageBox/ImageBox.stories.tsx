import { Story, Meta } from '@storybook/react';
import ImageBox, { Props } from './ImageBox';

const Template: Story<Props> = (args) => <ImageBox {...args} />;
export const ImageBoxStory = Template.bind({});

ImageBoxStory.args = {
  src: 'https://via.placeholder.com/300.png/09f/fff%20C/O%20https://placeholder.com/#How_To_Set_Background_Text_Color',
  alt: 'Picture of the author',
};

export default {
  title: 'ImageBox',
  component: ImageBox,
} as Meta;
