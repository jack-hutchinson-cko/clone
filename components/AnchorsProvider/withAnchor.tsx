import React, { FC, useContext, useRef, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toString, get } from 'lodash';
import { getAnchorUrl as getAnchorUrlFromText, getHashValue } from 'lib/url';
import { writeTextToClipboard } from 'lib/clipboard';

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
    const router = useRouter();
    const { children, ...restProps } = props;
    const anchorRef = useRef<HTMLSpanElement>(null);
    const { offsetTop = DEFAULT_OFFSET } = useContext<Props>(Context);
    const anchorUrl = getAnchorUrl(children);
    const hashValue = getHashValue(anchorUrl);

    const onClickHandler = useCallback(async () => {
      router.push(anchorUrl);
      await writeTextToClipboard(anchorUrl);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anchorUrl]);

    return (
      <>
        <Anchor
          ref={anchorRef}
          id={hashValue}
          data-type={silentMode ? '' : 'anchor'}
          offsetTop={offsetTop}
        />
        <Wrapper onClick={onClickHandler}>
          <Component {...restProps}>
            <Link href={anchorUrl}>
              <>
                <Title>{getRenderedChildren(children)}</Title>
                <IconWrapper>
                  <LinkIcon />
                </IconWrapper>
              </>
            </Link>
          </Component>
        </Wrapper>
      </>
    );
  };

export default withAnchor;
