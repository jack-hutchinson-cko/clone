import styled from 'styled-components';

import { SIZE, createBreakpointTo, createBreakpointBetween } from 'src/constants/screen';
import { spacing } from 'src/constants/spacingSize';

export const SubFooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 40px;
  margin: 0;
  padding: 0;

  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  a {
    font-size: inherit;
    line-height: inherit;
  }

  @media ${createBreakpointTo(SIZE.XL)} {
    gap: ${spacing.s40}px;
  }

  @media ${createBreakpointTo(SIZE.L)} {
    flex-direction: column;
  }

  @media ${createBreakpointBetween(SIZE.XS, SIZE.L)} {
    margin-top: ${spacing.s60}px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    margin-top: ${spacing.s50}px;
  }
`;

export const SubFooterListItem = styled.li`
  display: block;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.greyDark};
  font-size: 11px;
  line-height: 16px;
`;

export const FooterButton = styled.button`
  background: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
