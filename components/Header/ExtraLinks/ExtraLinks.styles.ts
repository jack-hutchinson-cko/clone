import styled, { css } from 'styled-components';
import { createBreakpointTo, createBreakpointBetween, SIZE } from 'constants/screen';

export const Container = styled.div<{ isMobile?: boolean }>`
  box-shadow: ${({ theme }) => theme.shadows.itemHolder};
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  ${({ isMobile }) =>
    isMobile
      ? css`
          width: 100%;
          font-size: 24px;
          line-height: 32px;
        `
      : css`
          width: 420px;
          font-size: 14px;
          line-height: 24px;
        `}

  @media ${createBreakpointTo(SIZE.XS)} {
    font-size: 16px;
    line-height: 20px;
  }
`;
export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin: 0;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.background};

  @media ${createBreakpointBetween(SIZE.XS, SIZE.M)} {
    padding: 40px;
    gap: 40px;
  }
  @media ${createBreakpointTo(SIZE.XS)} {
    padding: 24px;
  }
`;

export const Footer = styled(Content)`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;
