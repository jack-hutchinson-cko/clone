import styled, { css } from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.colors.base};

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Container = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex-direction: column;

  ${({ isMobile }) =>
    isMobile &&
    css`
      ${Navigation} {
        gap: 0;

        &:not(:first-child) {
          margin-top: 0;
        }
      }
    `}
`;
