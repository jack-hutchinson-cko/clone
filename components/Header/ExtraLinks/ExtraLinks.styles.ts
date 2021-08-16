import styled, { css } from 'styled-components';

export const Container = styled.div<{ isMobile?: boolean }>`
  box-shadow: ${({ theme }) => theme.shadows.itemHolder};

  ${({ isMobile }) =>
    isMobile
      ? css`
          width: 100%;
          font-size: 18px;
          line-height: 24px;
        `
      : css`
          width: 420px;
          font-size: 14px;
          line-height: 24px;
        `}
`;
export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin: 0;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Footer = styled(Content)`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
`;
