import { FC, useContext } from 'react';
import { ImageLoader } from 'next/image';
import ImgModalWrapper from 'components/ImageModalWrapper';
import { ThemeContext } from 'theme/themeContext';

import { ImgWrapper, StyledImage } from './ImageBoxStyles';

const isDarkTheme = 'dark';

export type Props = {
  src: string;
  darkThemeSrc?: string;
  alt?: string;
  layout?: 'fill';
  objectFit?: 'none' | 'contain' | 'cover' | 'fill' | 'scale-down';
  quality?: 100;
  loader?: ImageLoader;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  width?: '100%';
  maxWidth?: number;
  withFullscreenPreview?: boolean;
};

const ImageBox: FC<Props> = ({
  src,
  darkThemeSrc = '',
  maxWidth,
  withFullscreenPreview,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  const finalSrc = theme === isDarkTheme && darkThemeSrc ? darkThemeSrc : src;
  const imageBox = (
    <ImgWrapper maxWidth={maxWidth}>
      <StyledImage src={finalSrc} {...props} />
    </ImgWrapper>
  );

  return withFullscreenPreview ? (
    <ImgModalWrapper src={finalSrc}>{imageBox}</ImgModalWrapper>
  ) : (
    imageBox
  );
};

ImageBox.defaultProps = {
  layout: 'fill',
};

export default ImageBox;
