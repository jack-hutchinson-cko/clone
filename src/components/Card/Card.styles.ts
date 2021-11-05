import styled, { css } from 'styled-components';
import { Flex } from '@cko/primitives';
import { ReactSVG } from 'react-svg';
import { spacing } from 'src/constants/spacingSize';

import { TextHeadingThree } from '../TextHeading';
import { Text } from '../Text';

export const CardWrapper = styled(Flex)<{
  isWithHover?: boolean;
}>`
  flex-direction: column;
  padding: ${spacing.s50}px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: box-shadow 0.1s, border-color 0.7s;
  border-radius: 8px;
  cursor: ${({ isWithHover }) => (isWithHover ? 'pointer' : `auto`)};
  height: 100%;

  ${({ isWithHover }) =>
    isWithHover &&
    css`
      &:hover {
        box-shadow: ${({ theme }) => theme.shadows.light};
        border-color: ${({ theme }) => theme.colors.borderHighlight};
      }
    `};
  svg {
    margin-left: auto;
  }

  > p {
    margin-bottom: ${spacing.s40};
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;

export const TextContainer = styled(Text)<{ isMedia?: boolean }>`
  margin-top: 0px;
  flex-grow: 1;

  ${({ isMedia = false }) =>
    isMedia &&
    css`
      margin: 0;
    `};
`;

export const IconWrapper = styled.div<{
  maxWidth?: number | undefined;
  maxHeight: number | undefined;
}>`
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}px` : `max-width : ${spacing.s80}px`)};
  ${({ maxHeight }) =>
    maxHeight ? `max-height: ${maxHeight}px` : `max-height : ${spacing.s80}px`};
  margin-bottom: ${spacing.s50}px;
`;

export const StyledReactSVG = styled(ReactSVG)`
  height: 100%;
  & > div > svg {
    height: 100%;
    width: 100%;
  }
`;

export const Title = styled(TextHeadingThree)<{ isMedia?: boolean }>`
  margin: 0 0 16px 0;

  ${({ isMedia = false }) =>
    isMedia &&
    css`
      margin: 8px 0 4px;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    `}
`;
