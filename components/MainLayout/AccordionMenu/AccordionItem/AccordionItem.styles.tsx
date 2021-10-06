import styled, { css } from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';

export const MenuItem = styled.div<{ isRoot?: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  color: ${({ isRoot, theme }) => (isRoot ? theme.colors.base : theme.colors.baseList)};

  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 14px;
    line-height: 24px;
  }

  ${({ isRoot }) =>
    isRoot &&
    css`
      font-weight: 500;
      font-size: 32px;
      line-height: 40px;
      padding: 36px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};

      @media ${MobileBreakPoints.MOBILE_S} {
        padding: 24px 0;
        font-size: 16px;
        line-height: 24px;
      }
    `}

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;
