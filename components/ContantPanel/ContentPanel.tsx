import { FC } from 'react';

import ImageBox from '../ImageBox';
import { Container, Title, ImageWrapper } from './ContentPanel.styles';

const DefaultImageWidth = 70;

export type Props = {
  title: string;
  imgSrc: string;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
};

const ContentPanel: FC<Props> = ({
  children,
  title,
  imgSrc,
  imgAlt = '',
  imgWidth = DefaultImageWidth,
}) => {
  return (
    <Container>
      <ImageWrapper width={imgWidth}>
        <ImageBox src={imgSrc} alt={imgAlt} layout="fill" />
      </ImageWrapper>
      <div>
        {title ? <Title>{title}</Title> : null}
        {children}
      </div>
    </Container>
  );
};

export default ContentPanel;
