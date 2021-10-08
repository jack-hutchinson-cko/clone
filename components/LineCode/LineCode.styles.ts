import styled from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';

export const LineCode = styled.code<{ wordBreak?: string }>`
  padding: 2px 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.baseLight};
  background: ${({ theme }) => theme.colors.codeLabelBackground};
  font-family: Courier, monospace;
  font-size: 14px;
  line-height: 24px;
  font-weight: normal;
  word-break: ${({ wordBreak = 'normal' }) => wordBreak};

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 16px;
  }
`;
