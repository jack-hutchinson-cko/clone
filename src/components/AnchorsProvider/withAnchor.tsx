import React, { FC, useRef, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toString, get } from 'lodash';
import { getAnchorUrl as getAnchorUrlFromText, getHashValue, getPageUrl } from 'src/lib/url';
import { writeTextToClipboard } from 'src/lib/clipboard';

import { Anchor, Wrapper, Title, LinkIcon, IconWrapper } from './withAnchor.styles';

type Options = { silentMode?: boolean; iconIndent?: number };

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
  (Component: FC, { silentMode, iconIndent }: Options = {}): FC =>
  (props) => {
    const router = useRouter();
    const { children, ...restProps } = props;
    const anchorRef = useRef<HTMLSpanElement>(null);
    const anchorUrl = getAnchorUrl(children);
    const hashValue = getHashValue(anchorUrl);

    const onClickHandler = useCallback(async () => {
      const fullPageUrl = getPageUrl() + anchorUrl;
      router.push(anchorUrl);
      await writeTextToClipboard(fullPageUrl);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anchorUrl]);

    return (
      <>
        <Anchor ref={anchorRef} id={hashValue} data-type={silentMode ? '' : 'anchor'} />
        <Wrapper onClick={onClickHandler}>
          <Component {...restProps}>
            <Link href={anchorUrl}>
              <>
                <Title rightIndent={iconIndent}>{getRenderedChildren(children)}</Title>
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
