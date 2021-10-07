import React, { FC } from 'react';
import Link from 'next/link';

import { withAnchor as withAnchorWrapper } from 'components/AnchorsProvider';
import { IconArrowRight } from '../Icons';
import { Title, CardWrapper, TextContainer, IconWrapper, StyledReactSVG } from './Card.styles';
import { Props } from './types';

const TitleWithAnchor = withAnchorWrapper(Title);

const Card: FC<Props> = ({
  href,
  title,
  children,
  withAnchor,
  imgSrc = '',
  imgAlt = '',
  variant = 'default',
  maxWidth,
  maxHeight,
  isWithHover = true,
  ...rest
}) => {
  const HeaderComponent = withAnchor ? TitleWithAnchor : Title;

  const getCardContent = () => {
    switch (variant) {
      case 'media':
        return (
          <>
            <IconWrapper maxWidth={maxWidth} maxHeight={maxHeight}>
              <StyledReactSVG src={imgSrc} alt={imgAlt} />
            </IconWrapper>
            <HeaderComponent isMedia={variant === 'media'}>{title}</HeaderComponent>
            <TextContainer isMedia={variant === 'media'}>{children}</TextContainer>
          </>
        );

      case 'default':
      default:
        return (
          <>
            <HeaderComponent>{title}</HeaderComponent>
            <TextContainer>{children}</TextContainer>
            <IconArrowRight />
          </>
        );
    }
  };

  return (
    <Link href={href}>
      <CardWrapper isWithHover={isWithHover} {...rest}>
        {getCardContent()}
      </CardWrapper>
    </Link>
  );
};

export default Card;
