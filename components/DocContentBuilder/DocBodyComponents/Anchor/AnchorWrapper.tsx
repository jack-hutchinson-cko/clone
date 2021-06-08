import { FC, useEffect, useRef, useState } from 'react';

const SELECTION_AREA = 100;

const checkReachedElement = (target: HTMLElement): boolean => {
  const { top } = target.getBoundingClientRect();
  return top >= 0 && top <= SELECTION_AREA;
};

type Props = {
  id: number;
  slug?: string;
  onSelect?: (selectedId: number, slug?: string) => void;
};

const AnchorWrapper: FC<Props> = ({ children, id, slug, onSelect }) => {
  const [initialized, setInitialized] = useState<boolean>();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (refContainer.current) {
      setScrolled(checkReachedElement(refContainer.current));
      setInitialized(true);
    }
    const onScrollHandler = (): void => {
      if (refContainer.current) setScrolled(checkReachedElement(refContainer.current));
    };
    document.addEventListener('scroll', onScrollHandler);
    return () => document.removeEventListener('scroll', onScrollHandler);
  }, []);

  useEffect(() => {
    if (initialized && scrolled) onSelect?.(id, slug);
  }, [initialized, id, slug, onSelect, scrolled]);

  return <div ref={refContainer}>{children}</div>;
};

export default AnchorWrapper;
