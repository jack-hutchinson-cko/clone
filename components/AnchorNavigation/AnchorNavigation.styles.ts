import styled, { css } from 'styled-components';

export const NavigationHeader = styled.h3`
  font-size: 11px;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  color: ${({ theme }) => theme.colors.base};
`;
export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  margin: 9px 0 16px 0;
`;

export const AnchorLink = styled.a<{ isActive?: boolean }>`
  display: block;
  padding: 8px 20px;
  border-left: 4px solid;
  border-left-color: transparent;
  color: ${({ theme }) => theme.colors.cometLight};
  transition: border-left-color 200ms;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;

  ${({ isActive, theme }) => {
    if (isActive) {
      return css`
        font-weight: 500;
        border-left-color: ${theme.colors.borderLight};
        color: ${theme.colors.success};
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
