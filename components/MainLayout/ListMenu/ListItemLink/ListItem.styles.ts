import styled, { css } from 'styled-components';

export const StyledLink = styled.a<{ isActive?: boolean }>`
  mark {
    background: transparent;
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      mark {
        background: linear-gradient(
          to top,
          ${theme.colors.underline} 0 6px,
          transparent 6px 100%
        ) !important;
      }
    `}

  &:hover {
    text-decoration: ${({ isActive }) => (isActive ? 'none' : 'underline')};
  }
  word-break: break-word;
`;
