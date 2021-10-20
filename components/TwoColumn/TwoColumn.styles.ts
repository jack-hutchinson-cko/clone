import styled from 'styled-components';
import { Breakpoints } from 'constants/screen';
import { SizeByScreen } from './types';

export const Layout = styled.div<{ gap: number }>`
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
  flex-wrap: wrap;
`;

export const Col = styled.div<{
  columWidthByScreen: SizeByScreen;
  horizontalGapByScreen: SizeByScreen;
}>`
  @media ${Breakpoints.DESKTOP} {
    width: ${({ columWidthByScreen, horizontalGapByScreen }) =>
      `calc(${columWidthByScreen.desktop}% - ${horizontalGapByScreen.desktop / 2}px)`};
  }

  @media ${Breakpoints.TABLET} {
    width: ${({ columWidthByScreen, horizontalGapByScreen }) =>
      `calc(${columWidthByScreen.tablet}% - ${horizontalGapByScreen.tablet / 2}px)`};
  }

  @media ${Breakpoints.MOBILE} {
    width: ${({ columWidthByScreen, horizontalGapByScreen }) =>
      `calc(${columWidthByScreen.mobile}% - ${horizontalGapByScreen.mobile / 2}px)`};
  }
`;
