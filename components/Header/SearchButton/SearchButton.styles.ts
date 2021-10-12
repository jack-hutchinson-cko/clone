import styled from 'styled-components';
import { createBreakpointTo, SIZE } from 'constants/screen';

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${createBreakpointTo(SIZE.M)} {
    min-width: 48px;
    line-height: 16px;
  }

  svg {
    width: 27px;
    height: 27px;
    color: ${({ theme }) => theme.colors.base} !important;

    @media ${createBreakpointTo(SIZE.M)} {
      width: 22px;
      height: 22px;
    }
  }
`;
