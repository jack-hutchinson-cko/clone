import styled from 'styled-components';
import {
  SIZE,
  createBreakpointBetween,
  createBreakpointFrom,
  MobileBreakPoints,
} from 'constants/screen';
import CategoriesItem from '../Categories/CategoriesItem';

export const ContentWrapper = styled.div`
  flex-grow: 1;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 24px;

  @media ${createBreakpointBetween(SIZE.XS, SIZE.M)} {
    padding: 16px 24px;
  }
  @media ${createBreakpointFrom(SIZE.SM)} {
    padding: 24px 40px;
  }
  @media ${createBreakpointFrom(SIZE.M)} {
    padding: 24px 64px;
  }
  @media ${createBreakpointFrom(SIZE.L)} {
    padding: 64px;
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
  padding-bottom: 32px;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media ${createBreakpointFrom(SIZE.L)} {
    flex-direction: row;
    gap: 40px;
  }
`;

export const MainContent = styled.div`
  flex-grow: 1;
  overflow-x: hidden;
`;

export const SectionLinksContainer = styled.div`
  margin-top: 26px;
  width: 100%;
  min-width: 264px;
  @media ${createBreakpointFrom(SIZE.L)} {
    width: 264px;
  }
`;

export const PopularFaqItems = styled.div`
  margin: 24px 0;
`;

export const QuestionsContainer = styled.div`
  padding-top: 8px;
  @media ${createBreakpointFrom(SIZE.SM)} {
    padding-top: 16px;
  }
`;

export const TextHeadingOne = styled.h1`
  color: ${({ theme }) => theme.colors.base};
  font-size: 32px;
  line-height: 40px;
  max-width: 620px;
  margin: 0;

  @media ${createBreakpointBetween(SIZE.SM, SIZE.M)} {
    font-size: 56px;
    line-height: 64px;
  }

  @media ${createBreakpointFrom(SIZE.M)} {
    font-size: 48px;
    line-height: 56px;
  }

  @media ${createBreakpointBetween(SIZE.M, SIZE.L)} {
    margin: 24px 0;
  }
`;

export const TextHeadingThree = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.base};
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 16px;
  &:not(:first-child) {
    margin-top: 16px;
  }

  @media ${createBreakpointFrom(SIZE.SM)} {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 32px;
    &:not(:first-child) {
      margin-top: 64px;
    }
  }
  @media ${createBreakpointFrom(SIZE.M)} {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const StyledCategoriesItem = styled(CategoriesItem)`
  span,
  div {
    font-size: 16px;
    line-height: 24px;
  }

  @media ${MobileBreakPoints.MOBILE_L} {
    border-radius: 8px;
    span {
      font-size: 32px;
      line-height: 32px;
    }
    div {
      font-size: 24px;
      line-height: 32px;
    }
  }
  @media ${createBreakpointFrom(SIZE.M)} {
    div {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;
