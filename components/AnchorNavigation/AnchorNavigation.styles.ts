import styled, { css } from 'styled-components';

export const NavigationHeader = styled.h3`
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  margin: 0;
  color: ${({ theme }) => theme.colors.base};
`;
export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  margin: 16px 0;
`;

export const AnchorLink = styled.a<{ isActive?: boolean }>`
  display: block;
  padding: 8px 20px;
  border-left: 3px solid;
  border-left-color: transparent;
  color: ${({ theme }) => theme.colors.baseLight};
  transition: border-left-color 200ms;
  font-size: 14px;
  font-weight: 400;
  ${({ isActive, theme }) => {
    if (isActive) {
      return css`
        border-left-color: ${theme.colors.borderLight};
        color: ${theme.colors.base};
      `;
    }
    return css`
      :hover {
        border-left-color: ${theme.colors.border};
        text-decoration: underline;
      }
    `;
  }}
`;
