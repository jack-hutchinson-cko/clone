import { FC, useContext, useEffect, useRef, useState } from 'react';
import { toString } from 'lodash';
import { getAnchorUrl, getHashValue } from 'lib/url';

import Context, { Props } from './AnchorsContext';
import { Anchor } from './withAnchor.styles';

const DEFAULT_SELECTION_AREA = 100;
const DEFAULT_OFFSET = 0;

const checkReachedElement = (target: HTMLElement, areaHeight: number): boolean => {
  const { top } = target.getBoundingClientRect();
  return top >= 0 && top <= areaHeight;
};

const withAnchor =
  (Component: FC): FC =>
  (props) => {
    const { children } = props;
    const anchorRef = useRef<HTMLSpanElement>(null);
    const [initialized, setInitialized] = useState<boolean>();
    const [scrolled, setScrolled] = useState<boolean>(false);
    const {
      onSelect,
      areaHeight = DEFAULT_SELECTION_AREA,
      offsetTop = DEFAULT_OFFSET,
    } = useContext<Props>(Context);
    const anchorUrl = getAnchorUrl(toString(children)) || '';
    const name = getHashValue(anchorUrl);

    useEffect(() => {
      if (anchorRef.current) {
        setScrolled(checkReachedElement(anchorRef.current, areaHeight));
        setInitialized(true);
      }
      const onScrollHandler = (): void => {
        if (anchorRef.current) setScrolled(checkReachedElement(anchorRef.current, areaHeight));
      };
      document.addEventListener('scroll', onScrollHandler);
      return () => document.removeEventListener('scroll', onScrollHandler);
    }, [areaHeight]);

    useEffect(() => {
      if (initialized && scrolled) onSelect?.(anchorUrl);
    }, [initialized, anchorUrl, onSelect, scrolled]);

    return (
      <>
        <Anchor ref={anchorRef} name={name} offsetTop={offsetTop} />
        <Component {...props} />
      </>
    );
  };

export default withAnchor;
