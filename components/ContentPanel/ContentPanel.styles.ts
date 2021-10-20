import styled, { css } from 'styled-components';

import { spacing } from 'constants/spacingSize';
import ArrowLink from 'components/ArrowLink';
import { MdxTextHeadingFour } from 'components/TextHeading';
import { VariantContentPanel } from './types';

export const Container = styled.div<{ variant: VariantContentPanel; withBorder?: boolean }>`
  display: flex;
  align-items: flex-start;
  column-gap: ${spacing.s50}px;
  padding: ${({ variant, withBorder = true }) =>
    variant === 'eCommerce' ? `${spacing.s50}px` : `0 0 ${withBorder ? spacing.s70 : 0}px 0`};
  color: ${({ theme }) => theme.colors.base};
  ${({ withBorder = true, theme }) =>
    withBorder ? `border-bottom: 1px solid ${theme.colors.border};` : ''}

  ${({ theme, variant }) =>
    variant === 'eCommerce' &&
    css`
      flex-direction: column;
      height: 100%;
      border: 1px solid ${theme.colors.border};
      border-radius: 8px;
      background-clip: border-box;
      transition: background 0.5s, border 0.5s;

      &:hover {
        border: 1px solid ${theme.colors.borderHighlight};
        box-shadow: 0px 8px 16px rgb(12 17 66 / 12%);
      }
    `}
`;

export const BodyWrapper = styled.div`
  p {
    margin: 0px 0 ${spacing.s40}px 0;
    font-size: 16px;
    line-height: 24px;
  }

  > *:last-child {
    margin-bottom: 0;
  }
`;

export const LinkWrapper = styled.div`
  margin-bottom: ${spacing.s20}px;
`;

export const LinkItem = styled(ArrowLink)`
  margin: 0;
`;

export const Title = styled(MdxTextHeadingFour)<{ variant: VariantContentPanel }>`
  display: block;
`;

export const ImageWrapper = styled.div<{
  variant: VariantContentPanel;
  imgWidth?: number;
}>`
  ${({ variant, imgWidth = spacing.s80 }) =>
    variant === 'eCommerce'
      ? css`
          width: 180px;
          max-width: 100%;
          margin-bottom: ${spacing.s60}px;
        `
      : css`
          min-width: ${imgWidth}px;
        `}
`;
