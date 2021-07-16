import styled, { css } from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';

export const MenuItem = styled.div<{ isRoot?: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 300;
  font-size: 24px;
  color: ${({ isRoot, theme }) => (isRoot ? theme.colors.base : theme.colors.baseList)};

  ${({ isRoot }) =>
    isRoot &&
    css`
      font-weight: 500;
      font-size: 32px;
      line-height: 32px;
      padding: 10px 0 36px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    `}

  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 16px;
    line-height: 20px;
  }
`;
