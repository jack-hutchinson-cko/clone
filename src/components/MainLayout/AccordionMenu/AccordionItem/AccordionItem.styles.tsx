import styled, { css } from 'styled-components';
import { Breakpoints } from 'src/constants/screen';

export const MenuItem = styled.div<{ isRoot?: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  color: ${({ isRoot, theme }) => (isRoot ? theme.colors.base : theme.colors.baseList)};

  @media ${Breakpoints.MOBILE} {
    font-size: 14px;
    line-height: 24px;
  }

  ${({ isRoot }) =>
    isRoot &&
    css`
      padding: 24px 0;
      font-size: 16px !important;
      font-weight: 500;
      line-height: 24px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    `}

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
`;
