import { FC } from 'react';
import { StyledTabRow } from './TabRow.styles';

const TabRow: FC = ({ children }) => {
  return <StyledTabRow>{children}</StyledTabRow>;
};

export default TabRow;
