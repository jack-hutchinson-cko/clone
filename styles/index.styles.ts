import styled, { css } from 'styled-components';
import { Box, TextHeadingOne as PrimitivesTextHeadingOne, Text } from '@cko/primitives';
import { TextHeadingTwo } from 'components/TextHeading';
import {
  SIZE,
  Breakpoints,
  MobileBreakPoints,
  createBreakpointFrom,
  createBreakpointTo,
  createBreakpointBetween,
} from 'constants/screen';
import { spacing } from 'constants/spacingSize';

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

  button {
    margin-top: 30px;
  }

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
  font-weight: 400;

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 23px;
    line-height: 32px;
    width: 100%;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
`;

export const Content = styled.article`
  flex-grow: 1;
  overflow-x: hidden;
`;

const contentBuilderPage = `
  overflow-x: unset;
  width: 100%;
`;

const defaultSettings = `
  overflow-x: hidden;
`;

export const PageContent = styled.main<{ isIntegrationBuilder?: boolean }>`
  flex-grow: 1;
  ${({ isIntegrationBuilder }) => (isIntegrationBuilder ? contentBuilderPage : defaultSettings)}

  @media ${createBreakpointFrom(SIZE.L)} {
    padding: ${spacing.s60}px ${spacing.s90}px ${spacing.s70 - 4}px ${spacing.s60}px;
  }

  @media ${createBreakpointBetween(SIZE.M, SIZE.L)} {
    padding: ${spacing.s60}px ${spacing.s90}px ${spacing.s50 - 4}px ${spacing.s90}px;
  }

  @media ${createBreakpointBetween(SIZE.XS, SIZE.M)} {
    padding: ${spacing.s50}px ${spacing.s70}px ${spacing.s00};
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    padding: ${spacing.s50}px ${spacing.s50}px ${spacing.s00};
  }
`;

export const Title = styled(TextHeadingTwo)`
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

export const FrontMatterContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
`;

export const WrapperMDXContent = styled.div`
  padding-bottom: 36px;

  @media ${createBreakpointBetween(SIZE.M, SIZE.L)} {
    padding-bottom: 52px;
  }

  @media ${createBreakpointTo(SIZE.M)} {
    padding-bottom: 72px;
  }
`;
