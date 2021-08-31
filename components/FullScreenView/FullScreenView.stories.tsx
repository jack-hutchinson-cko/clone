import { Story, Meta } from '@storybook/react';
import ImageBox, { Props } from '../ImageBox/ImageBox';
import FullScreenView from '.';

export const FullScreenViewStory: Story<Props> = ({ src }) => {
  return (
    <FullScreenView>
      <ImageBox src={src} />
    </FullScreenView>
  );
};

FullScreenViewStory.args = {
  src: 'https://via.placeholder.com/500x300.png?text=Visit+WhoIsHostingThis.com+Buyers+Guide%20C/O%20https://placeholder.com/',
};

export default {
  title: 'FullScreenView',
  component: FullScreenView,
} as Meta;
