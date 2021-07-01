import styled, { css } from 'styled-components';

export const StyledLink = styled.a<{ isActive?: boolean }>`
  mark {
    background: transparent;
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      mark {
        background: linear-gradient(to top, ${theme.colors.turquoise} 0 6px, transparent 6px 100%);
      }
    `}

  &:hover {
    text-decoration: ${({ isActive }) => (isActive ? 'none' : 'underline')};
  }
`;
