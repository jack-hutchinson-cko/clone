import React, { FC } from 'react';
import { List } from './CategoriesList.styles';

export const DEFAULT_CARD_SIZE = 420;

type Props = {
  maxCardSize?: number;
};

const CategoriesList: FC<Props> = ({ children, maxCardSize = DEFAULT_CARD_SIZE, ...rest }) => (
  <List maxCardSize={maxCardSize} {...rest}>
    {children}
  </List>
);

export default CategoriesList;
