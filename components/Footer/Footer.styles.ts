import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.footerBackground};
`;

export const FooterContainer = styled.main<{ isMobile: boolean }>`
  max-width: 1360px;
  margin: 0 auto;
  padding: 80px ${({ isMobile }) => (isMobile ? 48 : 64)}px;
`;
