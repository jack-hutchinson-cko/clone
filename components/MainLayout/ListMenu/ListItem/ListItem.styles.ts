import styled from 'styled-components';

export const StyledListItem = styled.div<{ isRoot?: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: ${({ isRoot }) => (isRoot ? 500 : 300)};
  font-size: ${({ isRoot }) => (isRoot ? '16px' : '14px')};
`;
