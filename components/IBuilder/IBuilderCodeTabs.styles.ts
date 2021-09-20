import styled from 'styled-components';

export const TabHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.baseLight};
`;

export const TabItem = styled.div<{ isSelected: boolean }>`
  height: 50px;
  font-size: 14px;
  padding: 0 12px;
  color: ${({ theme, isSelected }) =>
    isSelected ? `${theme.colors.white}` : `${theme.colors.greyDark}`};
  display: flex;
  align-items: center;
  white-space: nowrap;
  border-bottom: 4px solid
    ${({ theme, isSelected }) => (isSelected ? `${theme.colors.white}` : 'transparent')};
  cursor: pointer;
`;

export const TabBody = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export const ControlsPanel = styled.div`
  align-self: center;
  flex-shrink: 0;
`;

export const ControlButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const TabsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;
