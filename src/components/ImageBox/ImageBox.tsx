import React, { FC, useContext, useState } from 'react';
import { ImageLoader } from 'next/image';
import ImgModalWrapper from 'src/components/ImageModalWrapper';
import { ThemeContext } from 'src/theme/themeContext';

import { generateAltAttribute } from 'src/lib/generateAltAttribute';
import { ImgWrapper, StyledImage, ImgPlaceholder, ContainerImage } from './ImageBoxStyles';

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
  defaultWidth?: number;
  defaultHeight?: number;
};

// keep this in sync with Next default loader
export const basePathLoader: ImageLoader = ({ src, width, quality }) => {
  const basePath = process.env.NEXT_PUBLIC_CLIENT_TYPE === 'ABC' ? '/docs' : '/docs/four';
  return `${basePath}/_next/image?url=${basePath + src}&w=${width}&q=${quality || 70}`;
};

const ImageBox: FC<Props> = ({
  src,
  darkThemeSrc = '',
  maxWidth,
  withFullscreenPreview = true,
  defaultWidth,
  defaultHeight,
  loader = basePathLoader,
  ...props
}) => {
  const { theme } = useContext(ThemeContext);
  const [placeholderVisibility, setPlaceholderVisibility] = useState(true);
  const finalSrc = theme === isDarkTheme && darkThemeSrc ? darkThemeSrc : src;
  const newSrc = encodeURIComponent(finalSrc);

  const onLoadHandler = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;

    if (target.complete && target.style.visibility !== 'hidden') {
      setPlaceholderVisibility(false);
    }
  };

  const imageBox = (
    <ImgWrapper maxWidth={maxWidth}>
      {defaultWidth && defaultHeight && (
        <ImgPlaceholder
          isShown={placeholderVisibility}
          defaultWidth={defaultWidth}
          defaultHeight={defaultHeight}
        />
      )}
      <ContainerImage defaultWidth={defaultWidth} defaultHeight={defaultHeight}>
        <StyledImage
          src={newSrc}
          onLoad={onLoadHandler}
          loader={loader}
          alt={generateAltAttribute(src)}
          {...props}
        />
      </ContainerImage>
    </ImgWrapper>
  );

  return withFullscreenPreview ? (
    <ImgModalWrapper src={newSrc} loader={loader} {...props}>
      {imageBox}
    </ImgModalWrapper>
  ) : (
    imageBox
  );
};

ImageBox.defaultProps = {
  layout: 'fill',
};

export default ImageBox;
