import React, { FC } from 'react';
import Link from 'next/link';
import ImageBox from '../../ImageBox';
import { Container, Header, HeaderImage, Body } from './CategoriesItem.styles';

const DEFAULT_IMG_WIDTH = 48;

export type Props = {
  href: string;
  title?: string;
  imageSrc?: string;
  imageMaxWidth?: number;
};

const CategoriesItem: FC<Props> = ({
  href,
  title,
  imageSrc,
  imageMaxWidth = DEFAULT_IMG_WIDTH,
  children,
}) => {
  return (
    <Link href={href} passHref>
      <Container>
        {title && (
          <Header>
            {imageSrc && (
              <HeaderImage width={imageMaxWidth}>
                <ImageBox src={imageSrc} alt={title} maxWidth={imageMaxWidth} layout="fill" />
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
