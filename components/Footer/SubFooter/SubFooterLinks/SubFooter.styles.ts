import styled from 'styled-components';

import { SIZE, createBreakpointTo, createBreakpointBetween } from 'constants/screen';

export const SubFooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 40px;
  margin: 0;
  padding: 0;

  font-weight: 400;
  font-size: 11px;
  line-height: 16px;

  a {
    font-size: inherit;
    line-height: inherit;
  }

  @media ${createBreakpointTo(SIZE.XL)} {
    gap: 16px;
  }

  @media ${createBreakpointTo(SIZE.L)} {
    flex-direction: column;
  }

  @media ${createBreakpointBetween(SIZE.XS, SIZE.L)} {
    margin-top: 32px;
  }

  @media ${createBreakpointBetween(SIZE.SM, SIZE.L)} {
    font-size: 16px;
    line-height: 24px;
  }

  @media ${createBreakpointBetween(SIZE.XS, SIZE.SM)} {
    font-size: 18px;
    line-height: 24px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    margin-top: 24px;
    font-size: 14px;
    line-height: 25px;
  }
`;

export const SubFooterListItem = styled.li`
  display: block;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.greyDark};
`;
