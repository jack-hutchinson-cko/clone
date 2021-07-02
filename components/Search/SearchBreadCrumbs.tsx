import { FC } from 'react';
import { StyledBreadCrumbs } from './SearchBreadCrumbs.styles';

type Props = {
  parentArticles: string[];
};

const SearchBreadCrumbs: FC<Props> = ({ parentArticles }) => {
  return <StyledBreadCrumbs>{parentArticles.join(' / ')}</StyledBreadCrumbs>;
};

export default SearchBreadCrumbs;
