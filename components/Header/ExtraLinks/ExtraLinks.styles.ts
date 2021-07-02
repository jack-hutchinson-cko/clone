import styled, { css } from 'styled-components';

export const Container = styled.div<{ isMobile?: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.baseLight};
  box-shadow: 0 3px 5px rgba(12, 17, 66, 0.15);

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
  padding: 32px;
  background: ${({ theme }) => theme.colors.white};
`;

export const Footer = styled(Content)`
  background: ${({ theme }) => theme.colors.greyLight};
`;
