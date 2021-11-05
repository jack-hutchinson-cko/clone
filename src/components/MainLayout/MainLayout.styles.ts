import styled from 'styled-components';
import { createBreakpointTo, SIZE } from 'src/constants/screen';

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

export const ContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
`;

export const SideBarWrapper = styled.aside`
  width: 300px;
  flex-grow: 0;
  min-width: 300px;
  padding: 32px 0 32px 64px;

  @media ${createBreakpointTo(SIZE.L)} {
    display: none;
  }
`;

export const Content = styled.main`
  padding: 32px 26px 64px 26px;
  flex-grow: 1;
`;

export const FooterWrapper = styled.div`
  flex-grow: 0;
`;

export const SkipLink = styled.a`
  transform: translateY(-1000%);
  transition: transform 0.3s;
  width: 154px;
  left: 47%;
  padding: 8px 24px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 1px 8px rgba(12, 17, 66, 0.12);
  border-radius: 0px 0px 8px 8px;
  z-index: 99;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  :focus {
    transform: translateY(0%);
  }
`;
