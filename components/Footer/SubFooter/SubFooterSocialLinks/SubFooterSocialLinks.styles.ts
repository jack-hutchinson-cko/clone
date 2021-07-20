import styled from 'styled-components';

import { createBreakpointBetween, createBreakpointTo, SIZE } from 'constants/screen';

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
  }

  @media ${createBreakpointTo(SIZE.L)} {
    justify-content: space-between;
    gap: 0;
  }

  @media ${createBreakpointBetween(SIZE.SM, SIZE.L)} {
    margin-top: 64px;

    li {
      svg {
        width: 43px;
      }
    }
  }

  @media ${createBreakpointBetween(SIZE.XS, SIZE.SM)} {
    margin-top: 80px;

    li {
      svg {
        width: 36px;
      }
    }
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    margin-top: 48px;

    li {
      svg {
        width: 22px;
      }
    }
  }
`;
