import styled from 'styled-components';

import { createBreakpointTo, SIZE, createBreakpointBetween } from 'constants/screen';
import { spacing } from 'constants/spacingSize';

export const SubFooterSocialLinksWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    margin: 0;
    padding: 0;

    svg {
      width: 16px;
      height: auto;
    }
    & svg:hover {
      color: ${({ theme }) => theme.colors.stormGray};
    }
  }

  @media ${createBreakpointTo(SIZE.L)} {
    justify-content: space-between;
    gap: 0;
    margin-top: ${spacing.s80}px;
    li {
      svg {
        width: 23px;
      }
    }
  }

  @media ${createBreakpointBetween(SIZE.M, SIZE.L)} {
    li {
      svg {
        width: 36px;
      }
    }
  }
`;
