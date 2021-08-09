import { FunctionComponent } from 'react';
import Link from 'next/link';
import { StyledContainer, StyledLinkContainer, StyledLink } from './breadCrumbsStyles';

export type Props = {
  breadCrumbsItem: { name: string; url: string }[];
};

const BreadCrumbs: FunctionComponent<Props> = ({ breadCrumbsItem, ...rest }) => (
  <StyledContainer {...rest}>
    {breadCrumbsItem.map((parentNode, index) => (
      <StyledLinkContainer key={parentNode.url}>
        {index !== 0 ? ' / ' : ''}
        <Link href={parentNode.url} passHref>
          <StyledLink>{parentNode.name}</StyledLink>
        </Link>
      </StyledLinkContainer>
    ))}
  </StyledContainer>
);

export default BreadCrumbs;
