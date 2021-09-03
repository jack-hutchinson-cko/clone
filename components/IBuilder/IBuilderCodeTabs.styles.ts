import styled from 'styled-components';

export const TabHeader = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.base};
`;

export const TabItem = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  padding: 0 10px;
  font-size: 12px;
  font-weight: ${({ isSelected }) => (isSelected ? 500 : 400)};
  height: 38px;
  border-top: 2px solid ${({ theme }) => theme.colors.base};
  display: flex;
  align-items: center;
  border-bottom: 2px solid
    ${({ theme, isSelected }) => (isSelected ? `${theme.colors.white}` : 'transparent')};
`;

export const TabBody = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export const ControlsPanel = styled.div`
  align-self: center;
  gap: 14px;
  margin: 0 10px 0 auto;
`;

export const ControlButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
