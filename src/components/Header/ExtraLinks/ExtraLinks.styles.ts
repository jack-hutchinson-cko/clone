import styled from 'styled-components';
import { createBreakpointTo, SIZE } from 'src/constants/screen';
import { spacing } from 'src/constants/spacingSize';

export const Container = styled.div<{ withMobileSize?: boolean }>`
  box-shadow: ${({ theme }) => theme.shadows.itemHolder};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 16px;
  line-height: 24px;
  width: 420px;

  @media ${createBreakpointTo(SIZE.M)} {
    ${({ withMobileSize }) => (withMobileSize ? 'width: 100%;' : '')}
  }
`;
export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin: 0;
  padding: ${spacing.s60}px;
  background-color: ${({ theme }) => theme.colors.background};

  @media ${createBreakpointTo(SIZE.M)} {
    padding: ${spacing.s50}px;
  }
`;

export const Footer = styled(Content)`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;
