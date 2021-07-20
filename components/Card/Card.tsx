import React, { FC } from 'react';
import Link from 'next/link';
import { withAnchor as withAnchorWrapper } from 'components/AnchorsProvider';
import { TextHeadingThree } from '../TextHeading/TextHeading.styles';
import { IconArrowRight } from '../Icons/Icons';
import { Props } from './types';
import { CardWrapper, TextContainer } from './Card.styles';

const TextHeadingThreeWithAnchor = withAnchorWrapper(TextHeadingThree);

const Card: FC<Props> = ({ href, title, children, withAnchor }) => {
  const HeaderComponent = withAnchor ? TextHeadingThreeWithAnchor : TextHeadingThree;

  return (
    <Link href={href}>
      <CardWrapper>
        <HeaderComponent>{title}</HeaderComponent>
        <TextContainer>{children}</TextContainer>
        <IconArrowRight />
      </CardWrapper>
    </Link>
  );
};

export default Card;
