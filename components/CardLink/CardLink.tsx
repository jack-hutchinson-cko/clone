import React, { FC } from 'react';
import { useMatchMedia } from '@cko/primitives';
import { Breakpoints } from 'constants/screen';
import { TextHeadingFour } from '../TextHeading/TextHeading.styles';
import ImageBox from '../ImageBox';
import ButtonLink from '../ButtonLink';
import { Props } from './types';
import { CardWrapper } from './CardLink.styles';

const CardLink: FC<Props> = ({ srcImg, href, title, linkName }) => {
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  return (
    <CardWrapper isMobile={isMobile}>
      <ImageBox src={srcImg} layout="fill" />
      <TextHeadingFour>{title}</TextHeadingFour>
      <ButtonLink href={href}>{linkName}</ButtonLink>
    </CardWrapper>
  );
};

export default CardLink;
