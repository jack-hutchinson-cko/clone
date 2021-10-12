import styled from 'styled-components';
import Link from 'next/link';

import { Breakpoints, MobileBreakPoints } from 'constants/screen';
import { spacing } from 'constants/spacingSize';

export const SearchesTitle = styled.div`
  color: ${({ theme }) => theme.colors.grayFaded};
  font-size: 11px;
  font-weight: 500;
  padding: 8px 0;
  line-height: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const PopularSearches = styled.div`
  padding: ${spacing.s40}px ${spacing.s50}px;

  @media ${Breakpoints.MOBILE} {
    padding: ${spacing.s40}px ${spacing.s70}px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    padding: ${spacing.s40}px ${spacing.s50}px;
  }
`;

export const PopularSearchesItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin: ${spacing.s20}px ${spacing.s00};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.base};

  &:hover {
    text-decoration: underline;
  }
  &:hover svg {
    transition: transform 0.15s linear 0s;
    transform: translateX(40%);
  }
`;

export const ButtonContainer = styled.div`
  margin: ${spacing.s20}px ${spacing.s00};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
`;
