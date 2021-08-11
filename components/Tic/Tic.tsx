import { FC } from 'react';
import { IconCheck, IconError, IconTicInfo } from 'components/Icons';
import { DecimalTic } from './Tic.styles';

const Tic: FC<{ type: 'check' | 'error' | 'info' | 'decimal'; number?: number }> = ({
  type = 'check',
  number = 0,
}) => {
  const extra = { 'data-tick-type': type };
  switch (type) {
    case 'error':
      return <IconError {...extra} />;

    case 'info':
      return <IconTicInfo {...extra} />;

    case 'decimal':
      return <DecimalTic {...extra}>{number}</DecimalTic>;

    case 'check':
    default:
      return <IconCheck {...extra} />;
  }
};

export default Tic;
