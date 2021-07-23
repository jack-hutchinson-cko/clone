import { FC } from 'react';

import { IconCheck, IconError, IconTicInfo } from 'components/Icons';

const Tic: FC<{ type: 'check' | 'error' | 'info' }> = ({ type = 'check' }) => {
  switch (type) {
    case 'error':
      return <IconError />;

    case 'info':
      return <IconTicInfo />;

    case 'check':
    default:
      return <IconCheck />;
  }
};

export default Tic;
