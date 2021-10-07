import styled, { css } from 'styled-components';

import { TextHeadingThree } from 'components/TextHeading';
import { Text } from 'components/Text';
import { createBreakpointBetween, createBreakpointTo, SIZE } from 'constants/screen';
import { HitMode } from 'types/search';

export const HighlightedHeader = styled(TextHeadingThree)<{ mode: HitMode }>`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.base};

  ${({ mode }) =>
    mode === HitMode.HEADER &&
    css`
      margin: 0;
      font-size: 16px;
      line-height: 24px;
    `}

  ${({ mode }) =>
    mode === HitMode.PAGE &&
    css`
      margin: 0 0 4px 0;
      font-size: 24px;
    `}

  @media ${createBreakpointBetween(SIZE.XS, SIZE.SM)} {
    font-size: 24px;
    line-height: 32px;
    margin: 0 0 4px 0;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const HighlightedBody = styled(Text)<{ mode: HitMode }>`
  color: ${({ theme }) => theme.colors.baseLight};
  word-break: break-word;

  ${({ mode }) =>
    mode === HitMode.HEADER &&
    css`
      margin: 0;
      font-size: 14px;
      line-height: 24px;
    `}

  ${({ mode }) =>
    mode === HitMode.PAGE &&
    css`
      margin: 16px 0 0 0;
      font-size: 16px;
      line-height: 24px;
    `}

  @media ${createBreakpointBetween(SIZE.XS, SIZE.SM)} {
    font-size: 24px;
    line-height: 32px;
  }
`;
