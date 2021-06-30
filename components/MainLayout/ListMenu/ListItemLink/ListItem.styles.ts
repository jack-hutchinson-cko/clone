import styled, { css } from 'styled-components';

export const StyledLink = styled.a<{ isActive?: boolean }>`
  ${({ isActive, theme }) =>
    isActive &&
    css`
      background: linear-gradient(
        to bottom,
        transparent calc(100% - 9px),
        ${theme.colors.turquoise} calc(100% - 9px) calc(100% - 3px),
        transparent calc(100% - 3px)
      );
    `}

  &:hover {
    text-decoration: ${({ isActive }) => (isActive ? 'none' : 'underline')};
  }
`;
