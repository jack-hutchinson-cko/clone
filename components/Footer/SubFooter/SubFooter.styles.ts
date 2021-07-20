import styled from 'styled-components';

import { createBreakpointBetween, createBreakpointTo, SIZE } from 'constants/screen';

type SubFooterProps = {
  isMobile?: boolean;
  isTablet?: boolean;
};

export const SubFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 70px;

  @media ${createBreakpointBetween(SIZE.XS, SIZE.L)} {
    margin-top: 80px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
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
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;

  @media ${createBreakpointBetween(SIZE.SM, SIZE.L)} {
    font-size: 16px;
    line-height: 24px;
  }

  @media ${createBreakpointBetween(SIZE.XS, SIZE.SM)} {
    font-size: 18px;
    line-height: 32px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const SubFooterDescription = styled.div<SubFooterProps>`
  color: ${({ theme }) => theme.colors.greyDark};
  max-width: 40%;
  font-size: 10px;
  line-height: 18px;

  p {
    margin: 0;
    padding: 0;
  }

  @media ${createBreakpointTo(SIZE.L)} {
    max-width: 100%;
  }

  @media ${createBreakpointBetween(SIZE.SM, SIZE.L)} {
    font-size: 14px;
    line-height: 26px;
  }

  @media ${createBreakpointBetween(SIZE.XS, SIZE.SM)} {
    font-size: 18px;
    line-height: 32px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    font-size: 14px;
    line-height: 20px;
  }
`;
