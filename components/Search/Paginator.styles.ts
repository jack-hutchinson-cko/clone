import styled from 'styled-components';
import { IconActionArrowRight } from 'components/Icons';
import { createBreakpointTo, createBreakpointBetween, SIZE } from 'constants/screen';
import { spacing } from 'constants/spacingSize';

export const PaginatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.border} !important;
  padding-top: 36px;
  margin: ${spacing.s50}px ${spacing.s40}px ${`${spacing.s50 + 4}`}px ${spacing.s40}px;

  @media ${createBreakpointBetween(SIZE.M, SIZE.L)} {
    margin-bottom: ${`${spacing.s70 + 2}`}px;
  }

  @media ${createBreakpointTo(SIZE.M)} {
    margin-bottom: ${`${spacing.s90 - 2}`}px;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  & > a {
    text-decoration: none;
    font-size: 14px;
    padding: 0 8px;
    color: ${({ theme }) => theme.colors.base};
    font-size: 16px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ArrowLeft = styled(IconActionArrowRight)`
  transform: rotate(180deg);
`;

export const ArrowRight = styled(IconActionArrowRight)``;
