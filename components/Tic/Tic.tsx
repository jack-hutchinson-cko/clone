import { FC } from 'react';
import { IconCheck, IconError, IconTicInfo } from 'components/Icons';
import { DecimalTic } from './Tic.styles';

const Tic: FC<{ type: 'check' | 'error' | 'info' | 'decimal'; number?: number }> = ({
  type = 'check',
  number = 0,
}) => {
  switch (type) {
    case 'error':
      return <IconError />;

    case 'info':
      return <IconTicInfo />;

    case 'decimal':
      return <DecimalTic>{number}</DecimalTic>;

    case 'check':
    default:
      return <IconCheck />;
  }
};

export default Tic;
