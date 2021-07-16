import styled from 'styled-components';
import Link from 'next/link';
import { Breakpoints, MobileBreakPoints } from 'constants/screen';

export const Results = styled.div<{ isShown: boolean }>`
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: calc(100% + 10px);
  width: 100%;
  min-width: 360px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.backgroundSearch};
  border-radius: 8px;
  box-shadow: 0 0 24px rgb(0 0 0 / 8%);
  color: ${({ theme }) => theme.colors.base};

  @media ${Breakpoints.MOBILE} {
    position: initial;
    top: auto;
    left: auto;
    box-shadow: none;
    border-radius: 0;
    border-width: 0;
  }
`;

const innerContainerStyles = `
  padding: 16px 8px;

  @media ${MobileBreakPoints.MOBILE_L} {
    padding: 32px 24px;
  }
`;

export const ResultItemsContainer = styled.div`
  ${innerContainerStyles}
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const PopularSearches = styled.div`
  ${innerContainerStyles}
`;

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
  @media ${MobileBreakPoints.MOBILE_L} {
    font-size: 24px;
    line-height: 32px;
    margin: 16px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 8px 16px;
`;

export const TextFieldWrapper = styled.div<{ isMobile?: boolean }>`
  position: relative;
  cursor: initial;
`;

export const Button = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.btnPrimaryBackground};
  color: ${({ theme }) => theme.colors.btnPrimaryFont};
  padding: 8px 24px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  outline: 0;
  border: 0;
  &:hover {
    background-color: ${({ theme }) => theme.colors.base};
  }

  @media ${Breakpoints.MOBILE} {
    width: 100%;
  }

  @media ${MobileBreakPoints.MOBILE_L} {
    font-size: 24px;
    line-height: 24px;
    padding: 24px 24px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
`;
