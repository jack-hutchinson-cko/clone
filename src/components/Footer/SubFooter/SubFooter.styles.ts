import styled from 'styled-components';
import { createBreakpointTo, Breakpoints, SIZE } from 'src/constants/screen';
import { spacing } from 'src/constants/spacingSize';

type SubFooterProps = {
  isMobile?: boolean;
  isTablet?: boolean;
};

export const SubFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: ${spacing.s100}px;

  @media ${Breakpoints.MOBILE} {
    margin-top: 48px;
  }
`;

export const SubFooterGridItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  font-size: 14px;

  @media ${createBreakpointTo(SIZE.L)} {
    font-size: 16px;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const SubFooterTitle = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
`;

export const SubFooterDescription = styled.div<SubFooterProps>`
  color: ${({ theme }) => theme.colors.greyDark};
  max-width: 40%;
  font-size: 11px;
  line-height: 16px;

  p {
    margin: 0;
    padding: 0;
  }

  @media ${createBreakpointTo(SIZE.L)} {
    max-width: 100%;
  }
`;
