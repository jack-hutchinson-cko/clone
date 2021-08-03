import styled from 'styled-components';

export const DecimalTic = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 11px;
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.baseLight};
  background: ${({ theme }) => theme.colors.backgroundSearch};
  font-size: 16px;
  border-radius: 50%;
`;
