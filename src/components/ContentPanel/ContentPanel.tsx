import { FC, Children } from 'react';
import { get } from 'lodash';
import ImageBox from 'src/components/ImageBox';
import {
  Container,
  Title,
  ImageWrapper,
  LinkWrapper,
  LinkItem,
  BodyWrapper,
} from './ContentPanel.styles';
import { ContentPanelProps } from './types';

const DefaultVariant = 'default';

const ContentPanel: FC<ContentPanelProps> = ({
  children,
  title,
  imgSrc,
  imgAlt = '',
  imgWidth,
  variant = DefaultVariant,
  ...rest
}) => {
  return (
    <Container variant={variant} {...rest}>
      <ImageWrapper variant={variant} imgWidth={imgWidth}>
        <ImageBox src={imgSrc} alt={imgAlt} withFullscreenPreview={false} />
      </ImageWrapper>
      <BodyWrapper>
        {title ? <Title variant={variant}>{title}</Title> : null}
        {Children.toArray(children).map((child) => {
          const { children: linkName, href, mdxType } = get(child, 'props.children.props', {});

          if (mdxType === 'a') {
            return (
              <LinkWrapper key={href}>
                <LinkItem href={href} title={linkName} />
              </LinkWrapper>
            );
          }

          return child;
        })}
      </BodyWrapper>
    </Container>
  );
};

export default ContentPanel;
