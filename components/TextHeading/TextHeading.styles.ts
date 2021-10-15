import styled from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';
import { spacing } from 'constants/spacingSize';

export const TextHeadingOne = styled.h1`
  color: ${({ theme }) => theme.colors.base};
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  margin: ${spacing.s60}px 0 ${spacing.s40}px 0;

  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const TextHeadingTwo = styled.h2`
  color: ${({ theme }) => theme.colors.base};
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  margin: ${spacing.s60}px 0 ${spacing.s40}px 0;

  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const TextHeadingThree = styled.h3`
  color: ${({ theme }) => theme.colors.base};
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  margin: ${spacing.s60}px 0 ${spacing.s40}px 0;
`;

export const TextHeadingFour = styled.h4`
  color: ${({ theme }) => theme.colors.base};
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  margin: ${spacing.s60}px 0 ${spacing.s40}px 0;
`;

export const TextHeadingFive = styled.h5`
  color: ${({ theme }) => theme.colors.base};
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  margin: ${spacing.s60}px 0 ${spacing.s40}px 0;
`;

export const MdxTextHeadingOne = styled(TextHeadingOne)`
  margin: 0 0 ${spacing.s40}px 0;
`;

export const MdxTextHeadingTwo = styled(TextHeadingTwo)`
  margin: 0 0 ${spacing.s40}px 0;
`;

export const MdxTextHeadingThree = styled(TextHeadingThree)`
  margin: 0 0 ${spacing.s40}px 0;
`;

export const MdxTextHeadingFour = styled(TextHeadingFour)`
  margin: 0 0 ${spacing.s40}px 0;
`;

export const MdxTextHeadingFive = styled(TextHeadingFive)`
  margin: 0 0 ${spacing.s40}px 0;
`;
