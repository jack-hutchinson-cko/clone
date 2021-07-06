import styled from 'styled-components';

export const LineCode = styled.code`
  padding: 2px 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.base};
  background: ${({ theme }) => theme.colors.codeLabelBackground};
  font-family: Courier, monospace;
  font-size: 14px;
  font-weight: normal;
  word-break: break-word;
`;
