import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const FrameWorkItemWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const FrameWorkBtn = styled.div<{ isSelected?: boolean }>`
  display: flex;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid
    ${({ theme, isSelected }) => (isSelected ? theme.colors.base : theme.colors.border)};
  cursor: pointer;
`;
