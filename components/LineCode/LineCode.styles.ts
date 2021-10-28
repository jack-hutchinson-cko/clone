import styled from 'styled-components';

export const LineCode = styled.code<{ wordBreak?: string }>`
  padding: 2px 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.baseLight};
  background: ${({ theme }) => theme.colors.codeLabelBackground};
  font-family: Courier, monospace;
  font-size: 14px;
  line-height: 24px;
  font-weight: normal;
  word-break: ${({ wordBreak = 'break-word' }) => wordBreak};
`;
