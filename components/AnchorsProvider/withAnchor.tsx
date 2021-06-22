import { FC, useContext, useEffect, useRef, useState } from 'react';
import { toString } from 'lodash';
import { getAnchorUrl, getHashValue } from 'lib/url';

import Context, { Props } from './AnchorsContext';
import { Anchor } from './withAnchor.styles';

const DEFAULT_OFFSET = 0;

const checkReachedElement = (target: HTMLElement): boolean => {
  const { top, bottom } = target.getBoundingClientRect();
  return top >= 0 && bottom <= (window.innerHeight || document.documentElement.clientHeight);
};

const withAnchor =
  (Component: FC): FC =>
  (props) => {
    const { children } = props;
    const anchorRef = useRef<HTMLSpanElement>(null);
    const [initialized, setInitialized] = useState<boolean>();
    const [scrolled, setScrolled] = useState<boolean>(false);
    const { onUpdateState, offsetTop = DEFAULT_OFFSET } = useContext<Props>(Context);
    const anchorUrl = getAnchorUrl(toString(children)) || '';
    const name = getHashValue(anchorUrl);

    useEffect(() => {
      if (anchorRef.current) {
        setScrolled(checkReachedElement(anchorRef.current));
        setInitialized(true);
      }

      const onScrollHandler = () => {
        if (anchorRef.current) setScrolled(checkReachedElement(anchorRef.current));
      };
      document.addEventListener('scroll', onScrollHandler);
      return () => document.removeEventListener('scroll', onScrollHandler);
    }, []);

    useEffect(() => {
      if (initialized) onUpdateState?.(anchorUrl, scrolled);
    }, [initialized, anchorUrl, onUpdateState, scrolled]);

    return (
      <>
        <Anchor ref={anchorRef} name={name} offsetTop={offsetTop} />
        <Component {...props} />
      </>
    );
  };

export default withAnchor;
