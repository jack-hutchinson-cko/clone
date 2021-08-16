import { FC } from 'react';
import { ImageLoader } from 'next/image';

import { ImgWrapper, StyledImage } from './ImageBoxStyles';

export type Props = {
  src: string;
  alt?: string;
  layout: 'fill';
  objectFit?: 'none' | 'contain' | 'cover' | 'fill' | 'scale-down';
  quality?: 100;
  loader?: ImageLoader;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  width?: '100%';
  maxWidth?: number;
};

const ImageBox: FC<Props> = ({ src, maxWidth, ...props }) => {
  return (
    <ImgWrapper maxWidth={maxWidth}>
      <StyledImage src={src} {...props} />
    </ImgWrapper>
  );
};

ImageBox.defaultProps = {
  layout: 'fill',
};

export default ImageBox;
