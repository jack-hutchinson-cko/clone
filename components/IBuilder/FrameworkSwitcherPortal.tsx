import { FC, ReactNode, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  rootId: string;
  children: ReactNode;
};

const FrameWorkSwitcherPortal: FC<Props> = ({ rootId, children }) => {
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const target = document.getElementById(rootId);
    target?.appendChild(el);
  });

  return createPortal(children, el);
};

export default FrameWorkSwitcherPortal;
