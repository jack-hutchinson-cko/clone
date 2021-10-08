import styled from 'styled-components';
import { TextHeadingTwo } from 'components/TextHeading';
import {
  createBreakpointBetween,
  createBreakpointFrom,
  createBreakpointTo,
  SIZE,
} from 'constants/screen';

export const Header = styled(TextHeadingTwo)`
  margin: 0 0 16px 0;
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
  margin: 0 0 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border} !important;

  @media ${createBreakpointFrom(SIZE.SM)} {
    padding-bottom: 32px;
  }

  @media ${createBreakpointBetween(SIZE.XS, SIZE.SM)} {
    padding-bottom: 24px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    padding-bottom: 16px;
  }
`;

export const SearchStatusContainer = styled.div`
  color: ${({ theme }) => theme.colors.cometLight};

  @media ${createBreakpointFrom(SIZE.SM)} {
    font-size: 16px;
    line-height: 24px;
  }

  @media ${createBreakpointBetween(SIZE.XS, SIZE.SM)} {
    font-size: 24px;
    line-height: 32px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    font-size: 14px;
    line-height: 24px;
  }
`;
