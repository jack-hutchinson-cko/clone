import styled, { css } from 'styled-components';

export const MenuItem = styled.div<{ isRoot?: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 400;
  font-size: 16px;
  color: ${({ isRoot, theme }) => (isRoot ? theme.colors.base : theme.colors.baseList)};

  ${({ isRoot }) =>
    isRoot &&
    css`
      font-weight: 500;
      font-size: 24px;
      padding: 30px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    `}
`;
