import styled from 'styled-components';
import { TextHeadingOne, TextHeadingThree } from 'src/components/TextHeading';
import {
  SIZE,
  createBreakpointBetween,
  createBreakpointFrom,
  createBreakpointTo,
} from 'src/constants/screen';
import { spacing } from 'src/constants/spacingSize';

import CategoriesItem from '../Categories/CategoriesItem';

export const ContentWrapper = styled.div`
  flex-grow: 1;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  padding: ${spacing.s70}px ${spacing.s50}px;

  @media ${createBreakpointBetween(SIZE.XS, SIZE.M)} {
    padding: ${spacing.s40}px ${spacing.s50}px;
  }

  @media ${createBreakpointFrom(SIZE.SM)} {
    padding: ${spacing.s50}px;
  }

  @media ${createBreakpointFrom(SIZE.M)} {
    padding: ${spacing.s50}px ${spacing.s60}px;
  }

  @media ${createBreakpointFrom(SIZE.L)} {
    padding: ${spacing.s90}px;
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

export const HeadingOne = styled(TextHeadingOne)`
  color: ${({ theme }) => theme.colors.base};
  max-width: 620px;
  margin: 0;

  @media ${createBreakpointBetween(SIZE.M, SIZE.L)} {
    margin: 24px 0;
  }
`;

export const HeadingThree = styled(TextHeadingThree)`
  margin: 0;
  color: ${({ theme }) => theme.colors.base};
  margin-bottom: 16px;

  &:not(:first-child) {
    margin-top: 16px;
  }

  @media ${createBreakpointFrom(SIZE.SM)} {
    margin-bottom: 32px;

    &:not(:first-child) {
      margin-top: 64px;
    }
  }
`;

export const StyledCategoriesItem = styled(CategoriesItem)`
  border-radius: 8px;
  line-height: 24px;

  span {
    font-size: 18px;
  }

  div {
    font-size: 16px;
  }

  @media ${createBreakpointFrom(SIZE.M)} {
    div {
      font-size: 14px;
    }
  }
`;

export const SearchLabel = styled.div`
  margin: 24px 0;
  color: ${({ theme }) => theme.colors.baseLight};
  font-size: 16px;
  line-height: 24px;
`;

export const SearchFieldWrapper = styled.div`
  margin: 32px 0;
`;

export const SearchExamples = styled.div`
  > p {
    display: inline-block;
    margin: 0 10px 0 0;
    font-size: 16px;
    line-height: 24px;

    @media ${createBreakpointTo(SIZE.XS)} {
      display: block;
      margin-bottom: 10px;
    }
  }

  > span {
    margin: 4px;
  }
`;
