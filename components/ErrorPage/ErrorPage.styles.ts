import styled from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';
import { spacing } from 'constants/spacingSize';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: ${spacing.s60}px ${spacing.s80}px min(120px, 10vh);
  color: ${({ theme }) => theme.colors.base};

  h1 {
    font-size: 120px;
    line-height: ${spacing.s100}px;
    margin: 0 0 ${spacing.s50}px 0;
  }

  .error-message {
    margin: 0 auto ${spacing.s90}px;
    font-size: 16px;
    line-height: ${spacing.s60}px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    .error-message {
      margin: 0 auto ${spacing.s80}px;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${spacing.s50}px;

  & > * {
    flex-basis: 100%;
  }
`;

export const StyledHeader = styled.h2`
  font-size: 56px;
  line-height: 56px;
  margin: 0;
`;

export const StyledSubHeader = styled.h3`
  font-size: 24px;
  line-height: ${spacing.s60}px;
  margin: ${spacing.s20}px 0 ${spacing.s50}px;
`;
