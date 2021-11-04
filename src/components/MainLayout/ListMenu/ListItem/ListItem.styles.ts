import styled from 'styled-components';

export const StyledListItem = styled.div<{ isRoot?: boolean; bottomMargin?: number }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ isRoot, theme }) => (isRoot ? theme.colors.base : theme.colors.baseList)};
  font-weight: ${({ isRoot }) => (isRoot ? 500 : 400)};
  font-size: ${({ isRoot }) => (isRoot ? '16px' : '14px')};
  line-height: 24px;
  ${({ bottomMargin }) => (bottomMargin ? `margin-bottom: ${bottomMargin}px;` : '')};
  padding-left: 30px;
`;
