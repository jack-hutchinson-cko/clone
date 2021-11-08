import styled from 'styled-components';
import { SIZE, Breakpoints } from 'src/constants/screen';
import { TextHeadingOne } from 'src/components/TextHeading';
import { spacing } from 'src/constants/spacingSize';

export const Header = styled(TextHeadingOne)`
  margin: 0;
  color: ${({ theme }) => theme.colors.base};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  flex-direction: row;

  @media (max-width: ${SIZE.SM}px) {
    flex-direction: column;
    gap: ${spacing.s40}px;
  }
`;

export const WhatsNewWidget = styled.div`
  margin-top: ${spacing.s70}px;
`;

export const Counter = styled.div`
  background-color: ${({ theme }) => theme.colors.borderLight};
  color: ${({ theme }) => theme.colors.successDark};
  border-radius: 4px;
  font-size: 16px;
  min-width: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 4px;
`;

export const CounterWrapper = styled.div`
  height: 24px;
  width: 0;
  position: relative;

  @media ${Breakpoints.MOBILE} {
    display: none;
  }
`;

export const CookieButton = styled.button`
  background: inherit;
  border: none;
  font-size: 16px;
  font-family: 'Graphik LCG';
  color: inherit;
  padding: 0;
  margin: 0;
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }
`;
