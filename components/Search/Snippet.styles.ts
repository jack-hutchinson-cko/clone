import styled, { css } from 'styled-components';

import { TextHeadingTwo } from 'components/TextHeading';
import { Text } from 'components/Text';
import { HitMode } from 'types/search';

export const HighlightedHeader = styled(TextHeadingTwo)<{ mode: HitMode }>`
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
`;
