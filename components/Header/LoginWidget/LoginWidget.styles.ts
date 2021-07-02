import styled, { css } from 'styled-components';

export const Divider = styled.span`
  font-size: inherit;
  font-style: normal;
  font-weight: normal;
`;

export const Container = styled.span<{ gap?: number; isMobile?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }) => gap ?? 6}px;
  padding-top: 12px;

  ${({ isMobile }) =>
    isMobile &&
    css`
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      padding-top: 0;

      ${Divider} {
        display: none;
      }
    `}
`;
