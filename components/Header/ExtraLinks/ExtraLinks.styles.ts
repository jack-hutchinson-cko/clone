import styled, { css } from 'styled-components';

export const Container = styled.div<{ isMobile?: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.baseLight};

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
  gap: 20px;
  width: 100%;
  margin: 0;
  padding: 24px 32px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Footer = styled(Content)`
  background: ${({ theme }) => theme.colors.greyLight};
`;
