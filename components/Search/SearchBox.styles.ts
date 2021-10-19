import styled, { css } from 'styled-components';
import { TextFieldBase } from '@cko/primitives';

import { Breakpoints } from 'constants/screen';
import { CrossSearch } from 'components/Icons';
import { spacing } from 'constants/spacingSize';

export const TextFieldHolder = styled.div<{ isFAQSection?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 40px;
  padding: ${spacing.s20}px ${spacing.s40}px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;

  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blueLight};
  }

  svg {
    color: ${({ theme }) => theme.colors.base} !important;
  }

  ${({ isFAQSection = false }) =>
    isFAQSection
      ? css`
          height: 72px;
          padding: 25px 24px;
          margin: 0;
          border-radius: 8px;
        `
      : css`
          @media ${Breakpoints.MOBILE} {
            margin: ${spacing.s50}px ${spacing.s50}px ${spacing.s10 - 2}px;
            padding: ${spacing.s20}px ${spacing.s40}px;
          }
        `}
`;

export const TextField = styled(TextFieldBase)<{ isFAQSection?: boolean }>`
  width: 100%;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.base};
  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;

  &::placeholder {
    font-style: normal;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.placeholderSearch};
  }

  ${({ isFAQSection = false }) =>
    isFAQSection
      ? css`
          font-size: 14px;
          line-height: 24px;
        `
      : ''}
`;

export const CrossSearchIcon = styled(CrossSearch)`
  cursor: pointer;
`;
