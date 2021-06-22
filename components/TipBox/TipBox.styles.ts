import styled from 'styled-components';
import { ThemeType } from 'constants/theme';
import { TipBoxVariant } from './types';

const getVariantColor = ({ theme, variant }: { theme: ThemeType; variant: TipBoxVariant }) => {
  switch (variant) {
    case 'info':
      return theme.colors.information;

    case 'warning':
      return theme.colors.warning;

    case 'note':
      return theme.colors.note;

    case 'tip':
    default:
      return theme.colors.tip;
  }
};

export const TipBoxWrapper = styled.div<{ variant: TipBoxVariant }>`
  position: relative;
  display: block;
  padding: 0 24px;
  border: 1px solid ${getVariantColor};
  border-left: 48px solid ${getVariantColor};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.base};
`;

export const TipBoxIcon = styled.span<{ variant: TipBoxVariant }>`
  position: absolute;
  left: -${({ variant }) => (variant === 'warning' ? 38 : 36)}px;
  top: calc(50% - ${({ variant }) => (variant === 'warning' ? 14 : 12)}px);
  display: inline-block;
`;

export const TipBoxHeader = styled.h3`
  margin: 0;
  padding-top: 16px;
  color: ${({ theme }) => theme.colors.base};
`;

export const TipBoxContent = styled.div`
  color: ${({ theme }) => theme.colors.base};
`;
