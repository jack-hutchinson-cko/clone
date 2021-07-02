import { FC } from 'react';

import { IconCheck, IconError } from 'components/Icons';

const Tic: FC<{ type: 'check' | 'error' }> = ({ type = 'check' }) => {
  switch (type) {
    case 'error':
      return <IconError />;

    case 'check':
    default:
      return <IconCheck />;
  }
};

export default Tic;
