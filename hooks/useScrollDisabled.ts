import { useEffect, useRef } from 'react';

const useWindowScrollDisabling = (disabled?: boolean) => {
  const yScrollValue = useRef<number>(0);

  useEffect(() => {
    yScrollValue.current = window.scrollY;

    const onScrollHandler = () => {
      yScrollValue.current = window.scrollY;
    };

    window.addEventListener('scroll', onScrollHandler);
    return () => window.removeEventListener('scroll', onScrollHandler);
  }, []);

  useEffect(() => {
    const { body } = document;
    if (disabled) {
      body.style.height = '100vh';
      body.style.overflowY = 'hidden';
    } else {
      body.style.position = '';
      body.style.top = '';
      body.style.height = '';
      body.style.overflowY = '';
      window.scrollTo({ left: 0, top: yScrollValue.current });
    }
  }, [disabled]);
};

export default useWindowScrollDisabling;
