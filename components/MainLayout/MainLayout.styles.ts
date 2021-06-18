import styled from 'styled-components';

export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const ContentWrapper = styled.div<{ isDesktop?: boolean }>`
  flex-grow: 1;
  display: flex;
  max-width: 1360px;
  width: ${({ isDesktop }) => (isDesktop ? '1360px' : '100%')};
  margin: 0 auto;
`;

export const SideBarWrapper = styled.div`
  width: 300px;
  flex-grow: 0;
  min-width: 300px;
  padding: 26px;
`;

export const Content = styled.main`
  padding: 32px 26px 64px 26px;
  flex-grow: 1;
`;
export const FooterWrapper = styled.div`
  flex-grow: 0;
`;
