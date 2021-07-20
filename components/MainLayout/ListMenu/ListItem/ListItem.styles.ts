import styled from 'styled-components';

export const StyledListItem = styled.div<{ isRoot?: boolean; bottomPadding?: number }>`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ isRoot, theme }) => (isRoot ? theme.colors.base : theme.colors.baseList)};
  font-weight: ${({ isRoot }) => (isRoot ? 500 : 300)};
  font-size: ${({ isRoot }) => (isRoot ? '16px' : '14px')};
  line-height: 24px;
  ${({ bottomPadding }) => (bottomPadding ? `padding-bottom: ${bottomPadding}px;` : '')}
`;
