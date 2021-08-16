import styled from 'styled-components';

export const MainWrapper = styled.div<{ isSelected?: boolean }>`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.codeLabelBackground : 'transparent'};
  border-left: 3px solid
    ${({ theme, isSelected }) => (isSelected ? `${theme.colors.base}` : 'transparent')};
  cursor: pointer;
  padding: 1px 24px;
  margin: 0px -24px;
`;
