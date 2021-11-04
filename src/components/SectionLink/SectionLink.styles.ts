import styled from 'styled-components';

import { Breakpoints, MobileBreakPoints } from 'src/constants/screen';

export const Wrapper = styled.div`
  display: block;
  margin-left: 34px;
  color: ${({ theme }) => theme.colors.base};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  transition: color 0.5s;

  &:before {
    content: 'Q:';
    float: left;
    margin-left: -34px;
    padding-right: 16px;
    vertical-align: top;
  }

  @media ${MobileBreakPoints.MOBILE_M} {
    &:before,
    h4 {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

export const Title = styled.h4`
  margin: 0 0 8px;
  font-size: 16px;
  line-height: 24px;

  a {
    color: inherit;
    font-weight: normal;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Description = styled.p`
  margin: 0 0 8px;
  padding: 0;
  color: ${({ theme }) => theme.colors.sectionDescription};
  font-size: 16px;
  line-height: 24px;
  transition: color 0.5s;

  @media ${Breakpoints.MOBILE} {
    display: none;
  }
`;
