import styled from 'styled-components';

export const StepWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.base};
  font-size: 16px;
  height: 24px;
  width: 24px;
  min-width: 24px;
  justify-content: center;
`;
