import { FC, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

const Portal: FC = ({ children }) => {
  const mount = document.querySelector('body');
  const el = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    mount?.appendChild(el);
    return () => {
      mount?.removeChild(el);
    };
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
