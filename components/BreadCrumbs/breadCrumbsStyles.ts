import styled from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';
import { IconArrowLeft } from '../Icons';

export const StyledContainer = styled.div<{ withIcon?: boolean }>`
  position: relative;
  align-items: center;
`;

export const StyledLinkContainer = styled.span`
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;

  &:last-child {
    font-weight: 500;
  }

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.base};
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledIconArrowLeft = styled(IconArrowLeft)`
  margin-right: 10px;
`;
