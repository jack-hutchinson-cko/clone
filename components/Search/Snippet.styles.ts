import styled from 'styled-components';

import { TextHeadingThree } from 'components/TextHeading';
import { Text } from 'components/Text';
import { MobileBreakPoints } from 'constants/screen';
import { HitMode } from 'types/search';

export const HighlightedHeader = styled(TextHeadingThree)<{ mode: HitMode }>`
  margin: ${({ mode }) => (mode === HitMode.HEADER ? 0 : '0px 0 8px 0')};
  font-size: ${({ mode }) => (mode === HitMode.HEADER ? '16px' : '24px')};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.base};
  ${({ mode }) => (mode === HitMode.HEADER ? 'line-height: 20px;' : '')}

  @media ${MobileBreakPoints.MOBILE_L} {
    font-size: 24px;
    margin: ${({ mode }) => (mode === HitMode.HEADER ? '0px 0 8px 0' : '0px 0 8px 0')};
  }
`;

export const HighlightedBody = styled(Text)<{ mode: HitMode }>`
  margin: ${({ mode }) => (mode === HitMode.HEADER ? 0 : '16px 0 0px 0')};
  font-size: ${({ mode }) => (mode === HitMode.HEADER ? '14px' : '16px')};
  word-break: break-word;

  @media ${MobileBreakPoints.MOBILE_L} {
    font-size: ${({ mode }) => (mode === HitMode.HEADER ? '24px' : '16px')};
    line-height: 32px;
  }
  color: ${({ theme }) => theme.colors.baseLight};
`;
