import styled, { css } from 'styled-components';
import { Flex } from '@cko/primitives';

import { TextHeadingThree } from '../TextHeading/TextHeading.styles';
import { Text } from '../Text';

export const CardWrapper = styled(Flex)`
  flex-direction: column;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: box-shadow 0.1s, border-color 0.7s;
  border-radius: 8px;
  cursor: pointer;
  height: 100%;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.light};
    border-color: ${({ theme }) => theme.colors.borderHighlight};
  }
  svg {
    margin-left: auto;
  }
`;

export const TextContainer = styled(Text)<{ isMedia?: boolean }>`
  flex-grow: 1;

  ${({ isMedia = false }) =>
    isMedia &&
    css`
      margin: 0;
    `};
`;

export const IconWrapper = styled.div`
  max-width: 32px;
  max-height: 32px;
  margin-top: 22px;
`;

export const Title = styled(TextHeadingThree)<{ isMedia?: boolean }>`
  ${({ isMedia = false }) =>
    isMedia &&
    css`
      margin: 8px 0 4px;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    `}
`;
