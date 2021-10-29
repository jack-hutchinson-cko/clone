import { FC } from 'react';
import ImageBox from 'components/ImageBox';
import withBlockBottomMargin from 'hoc/withBlockBottomMargin';
import ArrowLink from 'components/ArrowLink';
import { spacing } from 'constants/spacingSize';
import { Header, Body, Wrapper, ArrowWrapper } from './HomePageItem.styles';

const Img = withBlockBottomMargin(ImageBox, { spacing: spacing.s50 });

type Props = {
  title: string;
  imgSrc: string;
  links: { title: string; href: string }[];
};

const HomePageItem: FC<Props> = ({ title, imgSrc, children, links }) => {
  return (
    <Wrapper>
      <Img
        src={imgSrc}
        defaultHeight={184}
        defaultWidth={456}
        withFullscreenPreview={false}
        alt={title}
      />
      <Header>{title}</Header>
      <Body>{children}</Body>
      {links.map(({ title: linkTitle, href }) => (
        <ArrowWrapper key={href}>
          <ArrowLink href={href} title={linkTitle} />
        </ArrowWrapper>
      ))}
    </Wrapper>
  );
};

export default HomePageItem;