import styled, { css } from 'styled-components';

import { MobileBreakPoints } from 'constants/screen';
import { ThemeType } from 'types/theme';

type Props = {
  fullWidth?: boolean;
  fullHeight?: boolean;
  variant: 'primary' | 'secondary';
  size: 'large' | 'small';
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
        padding: 8px 24px;
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

const getFullHeight = ({ fullHeight }: { fullHeight?: boolean }) =>
  fullHeight && MobileBreakPoints.MOBILE_L;

const Button = styled.button<Props>`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 48px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  white-space: nowrap;

  &:hover {
    text-decoration: none;
  }

  ${getButtonFontStyles}
  ${getButtonColorStyles}

  ${({ fullWidth }) => fullWidth && 'width: 100%;'}

  @media ${MobileBreakPoints.MOBILE_M}, ${getFullHeight} {
    width: 100%;
    min-height: 76px;
    font-size: 24px;
    line-height: 32px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    width: 100%;
    min-height: 48px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export default Button;
