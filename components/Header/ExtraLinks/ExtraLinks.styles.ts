import styled from 'styled-components';
import { createBreakpointTo, createBreakpointBetween, SIZE } from 'constants/screen';
import { spacing } from 'constants/spacingSize';

export const Container = styled.div<{ isMobile?: boolean }>`
  box-shadow: ${({ theme }) => theme.shadows.itemHolder};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 16px;
  line-height: 24px;

  width: ${({ isMobile }) => (isMobile ? '100%' : '420px')};
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
    padding: ${spacing.s50}px ${spacing.s70}px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    padding: ${spacing.s50}px;
  }
`;

export const Footer = styled(Content)`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;
