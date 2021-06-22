import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';

const DEFAULT_DELAY = 350;

const useDebouncedState = <T>(
  initialState: T | (() => T),
  delay: number = DEFAULT_DELAY,
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(initialState);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialState);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setDebouncedValue(value), delay);
  }, [value, delay]);
  return [debouncedValue, setValue];
};

export default useDebouncedState;
