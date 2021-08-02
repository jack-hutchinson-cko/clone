import styled, { css } from 'styled-components';
import {
  Box,
  PrimaryButton,
  TextHeadingOne as PrimitivesTextHeadingOne,
  TextHeadingTwo,
  Text,
  List,
  Link as PrimitiveLink,
} from '@cko/primitives';
import { TextHeadingOne } from 'components/TextHeading';
import {
  SIZE,
  Breakpoints,
  MobileBreakPoints,
  createBreakpointBetween,
  createBreakpointFrom,
  createBreakpointTo,
} from 'constants/screen';

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media ${Breakpoints.MOBILE} {
    flex-direction: column;
    gap: 64px;
  }

  @media ${MobileBreakPoints.MOBILE_M} {
    gap: 24px;
  }
`;

export const ContentBlock = styled(Box)`
  flex: 1;

  @media ${Breakpoints.DESKTOP} {
    &:first-child {
      padding-right: 20px;
    }
  }
`;

export const ImageBoxWrapper = styled.div<{ maxDesktopWidth: number; hideForMobile?: boolean }>`
  max-width: 100%;

  @media ${Breakpoints.DESKTOP} {
    max-width: ${({ maxDesktopWidth }) => maxDesktopWidth}px;
  }

  ${({ hideForMobile }) =>
    hideForMobile &&
    css`
      @media (max-width: ${SIZE.SM}px) {
        display: none;
      }
    `}
`;

export const IntroTitle = styled(PrimitivesTextHeadingOne)`
  color: ${({ theme }) => theme.colors.base};
  letter-spacing: 0.02em;
  word-spacing: 0.02em;
  font-size: 40px;
  line-height: 48px;

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 56px;
    line-height: 64px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const IntroDescription = styled(Text)`
  margin: 30px 0 0;
  color: ${({ theme }) => theme.colors.baseLight};
  font-family: inherit;
  width: 85%;
  font-size: 16px;
  line-height: 24px;

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const GetStartedLink = styled(PrimaryButton)`
  margin-top: 30px;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${({ theme }) => theme.colors.btnPrimaryBackground};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.btnPrimaryFont};
  background-color: ${({ theme }) => theme.colors.btnPrimaryBackground};

  &:hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.btnPrimaryBackground};
    color: ${({ theme }) => theme.colors.btnPrimaryFont};
    background-color: ${({ theme }) => theme.colors.btnPrimaryBackground};
    box-shadow: inherit;
  }

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 24px;
    line-height: 32px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: ${SIZE.SM}px) {
    width: 100%;
  }
`;

export const BlocksWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 60px;

  @media ${Breakpoints.DESKTOP} {
    gap: 50px;
  }

  @media ${Breakpoints.TABLET} {
    gap: 48px;
  }

  @media ${Breakpoints.MOBILE} {
    gap: 24px;
  }

  @media (max-width: ${SIZE.SM}px) {
    gap: 33px;
    flex-direction: column;
  }
`;

export const BlockTitle = styled(TextHeadingTwo)`
  color: ${({ theme }) => theme.colors.base};
  margin: 20px 0 0;
  font-size: 18px;
  line-height: 32px;

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 40px;
    line-height: 48px;
  }
`;

export const BlockDescription = styled(Text)`
  padding: 10px 0 20px;
  color: ${({ theme }) => theme.colors.baseLight};
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const BlockList = styled(List)`
  & li {
    font-family: inherit;
    padding: 5px 0;
    font-weight: 500;
    a {
      font-size: 14px;
      color: ${({ theme }) => theme.colors.base};
    }

    line-height: 24px;

    @media ${MobileBreakPoints.MOBILE_M} {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

export const BlockLink = styled(PrimitiveLink)`
  cursor: pointer;
  & svg {
    margin-left: 8px;
  }
  &:hover svg {
    transform: translateX(40%);
    transition: transform 0.15s linear 0s;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
`;

export const Content = styled.article`
  flex-grow: 1;
  overflow-x: hidden;
`;

export const PageContent = styled.main`
  flex-grow: 1;
  overflow-x: hidden;

  @media ${createBreakpointFrom(SIZE.M)} {
    padding: 32px 64px 64px 64px;
  }

  @media ${createBreakpointBetween(SIZE.XS, SIZE.M)} {
    padding: 24px 40px 40px 40px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    padding: 24px;
  }
`;

export const Title = styled(TextHeadingOne)`
  margin-top: 32px;
`;

export const Navigation = styled.div`
  flex-grow: 0;
  width: 230px;
  min-width: 230px;
  position: sticky;
  height: 100%;
  top: 110px;
  padding: 0 26px 0 26px;
  box-sizing: content-box;

  @media ${createBreakpointTo(SIZE.XL)} {
    display: none;
  }
`;
