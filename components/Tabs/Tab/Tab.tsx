import { FC } from 'react';

import { Container } from './Tab.styles';

type Props = {
  title: string;
  active?: boolean;
};

const Tab: FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Tab;
