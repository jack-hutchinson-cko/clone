import styled from 'styled-components';
import {
  SIZE,
  createBreakpointBetween,
  createBreakpointFrom,
  createBreakpointTo,
} from 'constants/screen';

export const ContentWrapper = styled.div`
  flex-grow: 1;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;

  @media ${createBreakpointFrom(SIZE.M)} {
    padding: 12px 64px 32px 64px;
  }

  @media ${createBreakpointBetween(SIZE.XS, SIZE.M)} {
    padding: 12px 40px 32px 40px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    padding: 12px 24px;
  }
`;

export const SectionContent = styled.div`
  background: ${({ theme }) => theme.colors.sectionListBackground};
`;

export const HeadDescription = styled.div`
  color: ${({ theme }) => theme.colors.searchBreadcrumbs};
  font-size: 16px;
`;

export const HeaderContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.tabBorder};
  padding-bottom: 24px;
`;

export const Layout = styled.div`
  display: flex;
  gap: 40px;
`;

export const MainContent = styled.div`
  flex-grow: 1;
  overflow-x: hidden;
`;

export const SectionLinksContainer = styled.div`
  margin: 26px 0;
  width: 264px;
  min-width: 264px;
`;

export const PopularFaqItems = styled.div`
  margin: 24px 0;
`;
