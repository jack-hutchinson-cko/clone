import styled, { css } from 'styled-components';
import { spacing } from 'src/constants/spacingSize';

export const NavigationHeader = styled.h3`
  font-size: 11px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  color: ${({ theme }) => theme.colors.base};
  margin-bottom: ${spacing.s30}px;
`;
export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  > *:last-child {
    margin-bottom: 0;
  }
`;

export const LinkItemWrapper = styled.div`
  margin-bottom: ${spacing.s30}px;
`;

export const AnchorLink = styled.a<{ isActive?: boolean }>`
  display: block;
  padding: 0 0 0 ${spacing.s50 - 4}px;
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
