import { FC } from 'react';
import { ImgWrapper, StyledImage } from './ImageBoxStyles';

export type Props = {
  src: string;
  alt?: string;
  layout: 'fill';
  objectFit?: 'none' | 'contain' | 'cover' | 'fill' | 'scale-down';
  quality?: 100;
  loader?: () => string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
};

const ImageBox: FC<Props> = ({ src, ...props }) => {
  return (
    <ImgWrapper>
      <StyledImage src={src} {...props} />
    </ImgWrapper>
  );
};

ImageBox.defaultProps = {
  layout: 'fill',
};

export default ImageBox;
