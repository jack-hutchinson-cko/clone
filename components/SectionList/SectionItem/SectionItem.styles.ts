import styled, { css } from 'styled-components';

export const SectionItemWrapper = styled.li`
  svg {
    width: 16px;
    height: 16px;
    margin: 0 16px;
    color: ${({ theme }) => theme.colors.sectionIconLight};
    vertical-align: middle;
  }
`;

export const StyledLink = styled.a<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.sectionIconLight};
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  line-height: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.sectionListBackground};

    ${({ isActive }) => !isActive && 'text-decoration: underline;'}
  }

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme.colors.sectionListBackground};
      color: ${theme.colors.base};
      font-weight: 500;
    `}

  mark {
    color: inherit;
    background: transparent;

    ${({ isActive, theme }) =>
      isActive &&
      css`
        background: linear-gradient(to top, ${theme.colors.underline} 0 6px, transparent 8px 100%);
      `}
  }
`;
