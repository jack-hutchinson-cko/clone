import styled from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0 48px;
  padding-block: min(120px, 10vh);
  color: ${({ theme }) => theme.colors.base};

  h1 {
    font-size: 120px;
    line-height: 80px;
    margin: 0 0 24px 0;
  }

  .error-message {
    margin-top: 0;
    margin-bottom: 48px;
    font-size: 18px;
    line-height: 32px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    h1 {
      font-size: 100px;
    }
    .error-message {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4.5vh;

  & > * {
    flex-basis: 100%;
  }
`;
