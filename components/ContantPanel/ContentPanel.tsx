import { FC } from 'react';
import { ReactSVG } from 'react-svg';

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
  ...rest
}) => {
  return (
    <Container variant={variant} {...rest}>
      <ImageWrapper variant={variant} width={imgWidth}>
        <ReactSVG src={imgSrc} alt={imgAlt} />
      </ImageWrapper>
      <div>
        {title ? <Title variant={variant}>{title}</Title> : null}
        {children}
      </div>
    </Container>
  );
};

export default ContentPanel;
