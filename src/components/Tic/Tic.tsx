import { FC } from 'react';

import { IconCheck, IconError, IconTicInfo } from 'src/components/Icons';

const Tic: FC<{ type: 'check' | 'error' | 'info' | 'decimal'; number?: number }> = ({
  type = 'check',
}) => {
  const extra = { 'data-tick-type': type };
  switch (type) {
    case 'error':
      return <IconError {...extra} />;

    case 'info':
      return <IconTicInfo {...extra} />;

    case 'check':
    default:
      return <IconCheck {...extra} />;
  }
};

export default Tic;
