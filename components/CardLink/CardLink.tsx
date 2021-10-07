import React, { FC } from 'react';
import { useMatchMedia } from '@cko/primitives';

import { Breakpoints } from 'constants/screen';
import { TextHeadingFour } from '../TextHeading/TextHeading.styles';
import ImageBox from '../ImageBox';
import { CardWrapper } from './CardLink.styles';

export type Props = {
  srcImg: string;
  title?: string;
};

const CardLink: FC<Props> = ({ srcImg, title, children, ...rest }) => {
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  return (
    <CardWrapper isMobile={isMobile} {...rest}>
      <ImageBox src={srcImg} layout="fill" />
      <TextHeadingFour>{title}</TextHeadingFour>
      {children}
    </CardWrapper>
  );
};

export default CardLink;
