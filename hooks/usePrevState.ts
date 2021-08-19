import { useRef, useEffect } from 'react';

const usePrevState = <T>(state: T): T => {
  const ref = useRef(state);
  useEffect(() => {
    ref.current = state;
  }, [state]);
  return ref.current;
};

export default usePrevState;
