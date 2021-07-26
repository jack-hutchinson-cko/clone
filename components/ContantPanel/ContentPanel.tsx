import { FC } from 'react';

import ImageBox from '../ImageBox';
import { Container, Title, ImageWrapper } from './ContentPanel.styles';
import { ContentPanelProps } from './types';

const DefaultImageWidth = 70;
const DefaultVariant = 'default';

const ContentPanel: FC<ContentPanelProps> = ({
  children,
  title,
  imgSrc,
  imgAlt = '',
  imgWidth = DefaultImageWidth,
  variant = DefaultVariant,
}) => {
  return (
    <Container variant={variant}>
      <ImageWrapper variant={variant} width={imgWidth}>
        <ImageBox src={imgSrc} alt={imgAlt} layout="fill" />
      </ImageWrapper>
      <div>
        {title ? <Title variant={variant}>{title}</Title> : null}
        {children}
      </div>
    </Container>
  );
};

export default ContentPanel;
