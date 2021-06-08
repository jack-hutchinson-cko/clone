import { FunctionComponent } from 'react'
import { StyledContainer, StyledLinkContainer, StyledLink } from './breadCrumbsStyles'
import Link from 'next/link'

export type Props = {
  breadCrumbsItem: Array<{ name: string; url: string }>
}

const getTotalLink = ({
  parentsNodes,
  url,
}: {
  parentsNodes: Array<{ name: string; url: string }>;
  url: string;
}): string =>
  `/${parentsNodes
    .map((parentItem) => parentItem.url)
    .concat(url)
    .join('/')}`;

const BreadCrumbs: FunctionComponent<Props> = ({ breadCrumbsItem }) => (
  <StyledContainer>
    {breadCrumbsItem.map((parentNode, index) => (
      <StyledLinkContainer key={parentNode.url}>
        {index !== 0 ? ' / ' : ''}
        <Link
          href={getTotalLink({
            parentsNodes: breadCrumbsItem.slice(0, index),
            url: parentNode.url,
          })}
          passHref
        >
          <StyledLink>{parentNode.name}</StyledLink>
        </Link>
      </StyledLinkContainer>
    ))}
  </StyledContainer>
)

export default BreadCrumbs;
