import styled, { css } from 'styled-components';

import { VariantContentPanel } from './types';

export const Container = styled.div<{ variant: VariantContentPanel }>`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding-bottom: 24px;
  color: ${({ theme }) => theme.colors.base};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${({ theme, variant }) =>
    variant === 'eCommerce' &&
    css`
      flex: 1 0 0%;
      flex-direction: column;
      gap: 50px;
      min-height: 600px;
      height: 100%;
      margin-bottom: 24px;
      padding: 24px;
      border: 1px solid ${theme.colors.border};
      border-radius: 8px;
      background-clip: border-box;
      transition: background 0.5s, border 0.5s;

      &:hover {
        border: 1px solid ${theme.colors.borderHighlight};
        box-shadow: 0px 8px 16px rgb(12 17 66 / 12%);
      }

      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        font-size: 16px;
        line-height: 24px;
      }
    `}

  ${({ variant }) =>
    variant === 'heading' &&
    css`
      gap: 16px;
    `}

  p {
    display: block;
    margin: 0px 0 24px 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
  }

  a {
    margin: 0;
  }
`;

export const Title = styled.span<{ variant: VariantContentPanel }>`
  display: block;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 8px;

  ${({ variant }) =>
    variant === 'heading' &&
    css`
      margin-bottom: 10px;
      font-style: normal;
      font-size: 24px;
      line-height: 24px;
    `}
`;

export const ImageWrapper = styled.div<{ variant: VariantContentPanel; width: number }>`
  display: block;
  min-width: ${({ width }) => width}px;
  width: ${({ width }) => width}px;

  svg {
    height: ${({ width }) => width}px;
    width: ${({ width }) => width}px;
  }

  ${({ variant }) =>
    variant === 'heading' &&
    css`
      min-width: 32px;
      width: 32px;
    `}
`;
