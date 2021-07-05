import styled from 'styled-components';
import { TextHeadingThree } from 'components/TextHeading';
import { Text } from 'components/Text';

export const HighlightedHeader = styled(TextHeadingThree)<{ mode: 'header' | 'page' }>`
  margin: ${({ mode }) => (mode === 'header' ? 0 : '0px 0 8px 0')};
  font-size: ${({ mode }) => (mode === 'header' ? '16px' : '24px')};
  & > em {
    color: ${({ theme }) => theme.colors.textHighlight};
    font-style: normal;
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
`;
