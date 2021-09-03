import styled, { css } from 'styled-components';

export const StyledLink = styled.a<{ isActive?: boolean }>`
  mark {
    background: transparent;
    color: inherit;
    font-weight: 300;
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      mark {
        background: linear-gradient(to top, ${theme.colors.underline} 0 6px, transparent 6px 100%);
      }
    `}

  &:hover {
    text-decoration: ${({ isActive }) => (isActive ? 'none' : 'underline')};
  }
  word-break: break-word;
`;
