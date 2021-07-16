import styled, { css } from 'styled-components';

export const StyledLink = styled.a<{ isActive?: boolean }>`
  mark {
    background: transparent;
    color: inherit;
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      mark {
        background: linear-gradient(to top, ${theme.colors.underline} 0 8px, transparent 8px 100%);
      }
    `}

  &:hover {
    text-decoration: ${({ isActive }) => (isActive ? 'none' : 'underline')};
  }
`;
