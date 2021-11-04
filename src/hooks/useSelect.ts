import { useState, useEffect, useRef, RefObject } from 'react';

export const useSelect = (
  initialState = false,
): {
  isOpen: boolean;
  handelOpenClose: () => void;
  headerRef: RefObject<HTMLDivElement>;
} => {
  const [isOpen, setOpen] = useState(initialState);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handelOpenClose = () => {
    setOpen(!isOpen);
  };

  return {
    isOpen,
    handelOpenClose,
    headerRef,
  };
};
