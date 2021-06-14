import styled from 'styled-components';

export const LineCode = styled.code`
  color: ${({ theme }) => theme.colors.base};
  font-size: 14px;
  padding: 2px 8px;
  background: ${({ theme }) => theme.colors.codeLabelBackground};
  font-family: Courier, monospace;
  border-radius: 4px;
`;
