import styled, { css } from 'styled-components';
import { Box } from '@cko/primitives';
import { TextHeadingTwo } from 'components/TextHeading';
import { Text } from 'components/Text';

import { SIZE, Breakpoints, createBreakpointFrom, createBreakpointTo } from 'constants/screen';
import { spacing } from 'constants/spacingSize';

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${spacing.s00}px;

  @media ${Breakpoints.MOBILE} {
    flex-direction: column;
  }
`;

export const ContentBlock = styled(Box)`
  flex: 1;

  button {
    margin: 0 0 ${spacing.s70}px 0;
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

export const IntroTitle = styled(TextHeadingTwo)`
  margin: 0 0 ${spacing.s40}px 0;
`;

export const IntroDescription = styled(Text)`
  margin: 0 0 ${spacing.s70}px 0;
  width: 85%;
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

  @media ${createBreakpointFrom(SIZE.M)} {
    padding: ${spacing.s60}px ${spacing.s90}px ${spacing.s110}px ${spacing.s90}px;
  }

  @media ${createBreakpointTo(SIZE.M)} {
    padding: ${spacing.s50}px ${spacing.s50}px ${spacing.s90}px;
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
  padding: 0 ${spacing.s90}px 0 ${spacing.s50}px;
  box-sizing: content-box;

  @media ${createBreakpointTo(SIZE.XL)} {
    display: none;
  }
  margin-bottom: ${spacing.s30}px;
`;

export const FrontMatterContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: ${spacing.s50}px;
`;

export const ChildArticlesWrapper = styled.div`
  margin-top: ${spacing.s80}px;
`;
