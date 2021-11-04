import React, { FC } from 'react';

import { TextHeadingFour } from '../TextHeading/TextHeading.styles';
import ImageBox from '../ImageBox';
import { CardWrapper } from './CardLink.styles';

export type Props = {
  srcImg: string;
  title?: string;
};

const CardLink: FC<Props> = ({ srcImg, title, children, ...rest }) => {
  return (
    <CardWrapper {...rest}>
      <ImageBox src={srcImg} layout="fill" withFullscreenPreview={false} />
      <TextHeadingFour>{title}</TextHeadingFour>
      {children}
    </CardWrapper>
  );
};

export default CardLink;
