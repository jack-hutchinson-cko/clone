import { FC } from 'react';
import Card from 'components/Card';
import { CardsWrapper, CardContainer } from './ChildDocArticles.styles';

type Props = {
  childrenArticles: { title: string; href: string; description: string }[];
  isMobile: boolean;
};

const ChildDOcArticles: FC<Props> = ({ childrenArticles, isMobile }) => {
  return (
    <CardsWrapper>
      {childrenArticles.map((childItem) => (
        <CardContainer isMobile={isMobile} key={childItem.href}>
          <Card withAnchor href={childItem.href} title={childItem.title}>
            {childItem.description}
          </Card>
        </CardContainer>
      ))}
    </CardsWrapper>
  );
};

export default ChildDOcArticles;
