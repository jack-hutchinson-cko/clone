import styled from 'styled-components';
import { TextHeadingOne } from 'src/components/TextHeading';
import { createBreakpointFrom, createBreakpointTo, SIZE } from 'src/constants/screen';
import { spacing } from 'src/constants/spacingSize';

export const Header = styled(TextHeadingOne)`
  margin: 0 0 ${spacing.s40}px 0;
  color: ${({ theme }) => theme.colors.base};
`;

export const Mark = styled.span`
  color: ${({ theme }) => theme.colors.base};
  position: relative;
  &::after {
    position: absolute;
    z-index: -1;
    content: '';
    bottom: 4px;
    left: 0;
    right: 0;
    height: 8px;
  }

  background: linear-gradient(to top, ${({ theme }) => theme.colors.underline} 18%, transparent 2%);
`;

export const HeaderContainer = styled.div`
  margin: 0 0 ${spacing.s40}px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border} !important;

  @media ${createBreakpointFrom(SIZE.SM)} {
    padding-bottom: ${spacing.s60}px;
  }

  @media ${createBreakpointTo(SIZE.SM)} {
    padding-bottom: ${spacing.s40}px;
  }
`;

export const SearchStatusContainer = styled.div`
  color: ${({ theme }) => theme.colors.cometLight};
  font-size: 16px;
  line-height: 24px;
`;
