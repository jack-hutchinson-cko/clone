import { FC, useRef, useEffect, RefObject, ReactNode } from 'react';

type Props = {
  children: (ref: RefObject<HTMLDivElement>) => ReactNode;
  onOutsideClick: (e: MouseEvent) => void;
};

const Outside: FC<Props> = ({ onOutsideClick, children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(evt.target as Node)) {
        onOutsideClick(evt);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onOutsideClick]);

  return <>{children(wrapperRef)}</>;
};

export default Outside;
