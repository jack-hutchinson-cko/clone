import React, { FC, useContext, useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { toString } from 'lodash';

import { getAnchorUrl, getHashValue } from 'lib/url';
import { writeTextToClipboard } from 'lib/cliboard';

import Context, { Props } from './AnchorsContext';
import { Anchor, Wrapper, Title, LinkIcon, IconWrapper } from './withAnchor.styles';

const DEFAULT_OFFSET = 0;

const checkReachedElement = (target: HTMLElement): boolean => {
  const { top, bottom } = target.getBoundingClientRect();
  return top >= 0 && bottom <= (window.innerHeight || document.documentElement.clientHeight);
};

type Options = { silentMode?: boolean };

const withAnchor =
  (Component: FC, { silentMode }: Options = {}): FC =>
  (props) => {
    const { children, ...restProps } = props;
    const anchorRef = useRef<HTMLSpanElement>(null);
    const [initialized, setInitialized] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const { onUpdateState, offsetTop = DEFAULT_OFFSET } = useContext<Props>(Context);
    const anchorUrl = getAnchorUrl(toString(children)) || '';
    const hashValue = getHashValue(anchorUrl);

    useEffect(() => {
      setInitialized(true);

      const onScrollHandler = () => {
        if (anchorRef.current) setScrolled(checkReachedElement(anchorRef.current));
      };
      document.addEventListener('scroll', onScrollHandler);
      return () => document.removeEventListener('scroll', onScrollHandler);
    }, []);

    useEffect(() => {
      if (!silentMode && initialized) onUpdateState?.(anchorUrl, scrolled);
    }, [initialized, anchorUrl, onUpdateState, scrolled]);

    const onClickHandler = useCallback(async () => {
      await writeTextToClipboard(anchorUrl);
    }, [anchorUrl]);

    return (
      <>
        <Anchor ref={anchorRef} id={hashValue} offsetTop={offsetTop} />
        <Wrapper>
          <Component {...restProps}>
            <Link href={anchorUrl}>
              <>
                <Title>{children}</Title>
                <IconWrapper>
                  <LinkIcon onClick={onClickHandler} />
                </IconWrapper>
              </>
            </Link>
          </Component>
        </Wrapper>
      </>
    );
  };

export default withAnchor;
