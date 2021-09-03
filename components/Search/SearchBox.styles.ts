import styled, { css } from 'styled-components';
import { TextFieldBase } from '@cko/primitives';

import { MobileBreakPoints } from 'constants/screen';
import { CrossSearch } from 'components/Icons';

export const TextFieldHolder = styled.div<{ isFAQSection?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 5px;
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
          @media ${MobileBreakPoints.MOBILE_L} {
            margin: 40px 40px 2px 40px;
            padding: 18px 24px;
          }

          @media ${MobileBreakPoints.MOBILE_M} {
            margin: 24px 24px 2px 24px;
          }

          @media ${MobileBreakPoints.MOBILE_S} {
            margin: 24px 24px 2px 24px;
          }
        `}
`;

export const TextField = styled(TextFieldBase)<{ isFAQSection?: boolean }>`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  font-family: inherit;
  color: ${({ theme }) => theme.colors.base};
  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;

  &::placeholder {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.placeholderSearch};
  }

  @media ${MobileBreakPoints.MOBILE_L} {
    font-size: 32px;
  }

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 18px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 18px;
  }

  ${({ isFAQSection = false }) =>
    isFAQSection
      ? css`
          font-size: 18px;
          line-height: 24px;

          @media ${MobileBreakPoints.MOBILE_L} {
            font-size: 24px;
            line-height: 32px;
          }
        `
      : ''}
`;

export const CrossSearchIcon = styled(CrossSearch)`
  cursor: pointer;
`;
