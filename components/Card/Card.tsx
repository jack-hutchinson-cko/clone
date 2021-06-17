import React, { FC } from 'react';
import Link from 'next/link';
import { TextHeadingThree } from '../TextHeading/TextHeading.styles';
import { Text } from '../Text/Text.styles';
import { IconArrowRight } from '../Icons/Icons';
import { Props } from './types';
import { CardWrapper } from './Card.styles';

const Card: FC<Props> = ({ href, title, children }) => {
  return (
    <Link href={href}>
      <CardWrapper>
        <TextHeadingThree>{title}</TextHeadingThree>
        <Text>{children}</Text>
        <IconArrowRight />
      </CardWrapper>
    </Link>
  );
};

export default Card;
