import { FC } from 'react';
import { StyledImage } from './ImageBoxStyles';

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
  return <StyledImage src={src} {...props} />;
};

export default ImageBox;
