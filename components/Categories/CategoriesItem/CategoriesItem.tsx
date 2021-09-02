import React, { FC } from 'react';
import Link from 'next/link';
import ImageBox from '../../ImageBox';
import { Container, Header, HeaderImage, Body } from './CategoriesItem.styles';

export const DEFAULT_IMG_WIDTH = 48;

export type Props = {
  href: string;
  title?: string;
  imageSrc?: string;
  darkThemeImageSrc?: string;
  imageMaxWidth?: number;
};

const CategoriesItem: FC<Props> = ({
  href,
  title,
  imageSrc,
  darkThemeImageSrc,
  imageMaxWidth = DEFAULT_IMG_WIDTH,
  children,
  ...rest
}) => {
  return (
    <Link href={href} passHref>
      <Container {...rest}>
        {title && (
          <Header>
            {imageSrc && (
              <HeaderImage width={imageMaxWidth}>
                <ImageBox
                  src={imageSrc}
                  darkThemeSrc={darkThemeImageSrc}
                  alt={title}
                  maxWidth={imageMaxWidth}
                  layout="fill"
                />
              </HeaderImage>
            )}
            <span>{title}</span>
          </Header>
        )}
        <Body>{children}</Body>
      </Container>
    </Link>
  );
};

export default CategoriesItem;
