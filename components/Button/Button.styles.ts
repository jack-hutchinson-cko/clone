import styled, { css } from 'styled-components';

import { Breakpoints, createBreakpointTo, SIZE } from 'constants/screen';
import { ThemeType } from 'types/theme';
import { spacing } from 'constants/spacingSize';

type Props = {
  fullWidth?: boolean;
  variant: 'primary' | 'secondary';
  size: 'large' | 'small';
  fullWidthOnTablet?: boolean;
};

const getButtonColorStyles = ({ theme, variant }: { theme: ThemeType } & Props) => {
  switch (variant) {
    case 'secondary':
      return css`
        color: ${theme.colors.btnSecondaryFont};
        background-color: ${theme.colors.btnSecondaryBackground};

        &:hover {
          background-color: ${theme.colors.btnSecondaryHover};
        }

        &:disabled {
          color: ${theme.colors.btnSecondaryDisabledFont};
          background-color: ${theme.colors.btnSecondaryDisabled};
        }
      `;

    case 'primary':
    default:
      return css`
        color: ${theme.colors.btnPrimaryFont};
        background-color: ${theme.colors.btnPrimaryBackground};

        &:hover {
          background-color: ${theme.colors.btnPrimaryHover};
        }

        &:disabled {
          color: ${theme.colors.btnPrimaryDisabledFont};
          background-color: ${theme.colors.btnPrimaryDisabled};
        }
      `;
  }
};

const getButtonFontStyles = ({ size }: Props) => {
  switch (size) {
    case 'small':
      return css`
        min-height: 40px;
        padding: ${spacing.s20}px ${spacing.s50}px;
        font-size: 14px;
        line-height: 24px;
      `;

    case 'large':
    default:
      return css`
        font-size: 16px;
        line-height: 24px;
      `;
  }
};

const Button = styled.button<Props>`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  padding: ${spacing.s30}px ${spacing.s50}px;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 500;
  white-space: nowrap;

  &:hover {
    text-decoration: none;
  }

  ${getButtonFontStyles}
  ${getButtonColorStyles}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  @media ${createBreakpointTo(SIZE.SM)} {
    width: 100%;
  }

  @media ${createBreakpointTo(SIZE.L)} {
    ${({ fullWidthOnTablet }) => (fullWidthOnTablet ? 'width: 100%;' : '')}
  }

  @media ${Breakpoints.MOBILE} {
    min-height: 48px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export default Button;
