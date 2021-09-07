import React, { FC, useContext, useEffect, useRef, useState, useCallback, ReactNode } from 'react';
import Link from 'next/link';
import { toString, get } from 'lodash';
import { getAnchorUrl as getAnchorUrlFromText, getHashValue } from 'lib/url';
import { writeTextToClipboard } from 'lib/cliboard';

import Context, { Props } from './AnchorsContext';
import { Anchor, Wrapper, Title, LinkIcon, IconWrapper } from './withAnchor.styles';

const DEFAULT_OFFSET = 0;

type Options = { silentMode?: boolean };

const getIsChildLink = (children: ReactNode) => get(children, 'props.originalType') === 'a';

const getAnchorUrl = (children: ReactNode): string => {
  if (typeof children === 'string') {
    return getAnchorUrlFromText(toString(children)) || '';
  }
  if (getIsChildLink(children)) {
    return get(children, 'props.href', '');
  }

  return '';
};

const getRenderedChildren = (children: ReactNode): ReactNode => {
  if (getIsChildLink(children)) {
    return get(children, 'props.children', '');
  }

  return children;
};

const withAnchor =
  (Component: FC, { silentMode }: Options = {}): FC =>
  (props) => {
    const { children, ...restProps } = props;
    const anchorRef = useRef<HTMLSpanElement>(null);
    const { offsetTop = DEFAULT_OFFSET } = useContext<Props>(Context);
    const anchorUrl = getAnchorUrl(children);
    const hashValue = getHashValue(anchorUrl);

    const onClickHandler = useCallback(async () => {
      await writeTextToClipboard(anchorUrl);
    }, [anchorUrl]);

    return (
      <>
        <Anchor
          ref={anchorRef}
          id={hashValue}
          data-type={silentMode ? '' : 'anchor'}
          offsetTop={offsetTop}
        />
        <Wrapper>
          <Component {...restProps}>
            <Link href={anchorUrl}>
              <>
                <Title>{getRenderedChildren(children)}</Title>
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
