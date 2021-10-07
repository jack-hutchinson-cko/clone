import styled from 'styled-components';
import Link from 'next/link';

import { Breakpoints, MobileBreakPoints } from 'constants/screen';

export const SearchesTitle = styled.div`
  color: ${({ theme }) => theme.colors.grayFaded};
  font-size: 11px;
  font-weight: 500;
  padding: 8px 16px;
  line-height: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media ${MobileBreakPoints.MOBILE_L} {
    font-size: 16px;
    line-height: 16px;
  }
`;

export const PopularSearches = styled.div`
  padding: 16px 8px;

  @media ${MobileBreakPoints.MOBILE_L} {
    padding: 32px 24px;
  }
`;

export const PopularSearchesItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin: 8px 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.base};

  &:hover {
    text-decoration: underline;
  }
  &:hover svg {
    transition: transform 0.15s linear 0s;
    transform: translateX(40%);
  }
  @media ${MobileBreakPoints.MOBILE_L} {
    font-size: 24px;
    line-height: 32px;
    margin: 16px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 8px 16px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
`;
