import styled from 'styled-components';
import { createBreakpointBetween, SIZE } from 'constants/screen';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  color: ${({ theme }) => theme.colors.baseLight};
  font-weight: 400;

  @media ${createBreakpointBetween(SIZE.XS, SIZE.M)} {
    gap: 16px;
  }
`;
