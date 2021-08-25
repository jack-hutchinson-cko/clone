import styled from 'styled-components';
import { TextHeadingThree } from 'components/TextHeading';
import { Text } from 'components/Text';
import { MobileBreakPoints } from 'constants/screen';

export const HighlightedHeader = styled(TextHeadingThree)<{ mode: 'header' | 'page' }>`
  margin: ${({ mode }) => (mode === 'header' ? 0 : '0px 0 8px 0')};
  font-size: ${({ mode }) => (mode === 'header' ? '16px' : '24px')};
  color: ${({ theme }) => theme.colors.base};
  & > em {
    color: ${({ theme }) => theme.colors.textHighlight};
    font-style: normal;
  }

  @media ${MobileBreakPoints.MOBILE_L} {
    font-size: ${({ mode }) => (mode === 'header' ? '24px' : '24px')};
    margin: ${({ mode }) => (mode === 'header' ? '0px 0 8px 0' : '0px 0 8px 0')};
  }
`;

export const HighlightedBody = styled(Text)<{ mode: 'header' | 'page' }>`
  margin: ${({ mode }) => (mode === 'header' ? 0 : '16px 0 0px 0')};
  font-size: ${({ mode }) => (mode === 'header' ? '14px' : '16px')};
  word-break: break-word;
  & > em {
    color: ${({ theme }) => theme.colors.textHighlight};
    font-style: normal;
  }

  @media ${MobileBreakPoints.MOBILE_L} {
    font-size: ${({ mode }) => (mode === 'header' ? '24px' : '16px')};
    line-height: 32px;
  }
  color: ${({ theme }) => theme.colors.baseLight};
`;
