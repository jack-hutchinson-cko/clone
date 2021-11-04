import React, { FC } from 'react';
import { StyledOption } from './Option.styles';

type Props = {
  title: string;
  active?: boolean;
};

const Option: FC<Props> = ({ children }) => {
  return <StyledOption>{children}</StyledOption>;
};

export default Option;
