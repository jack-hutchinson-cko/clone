import { Story, Meta } from '@storybook/react';
import ImageBox, { Props } from '../ImageBox/ImageBox';
import ImageModalWrapper from '.';

export const ImageModalWrapperStory: Story<Props> = ({ src }) => {
  return (
    <ImageModalWrapper src={src}>
      <ImageBox src={src} />
    </ImageModalWrapper>
  );
};

ImageModalWrapperStory.args = {
  src: 'https://via.placeholder.com/500x300.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide%20C/O%20https://placeholder.com/',
};

export default {
  title: 'ImageModalWrapper',
  component: ImageModalWrapper,
} as Meta;
