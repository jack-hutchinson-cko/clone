import styled from 'styled-components';
import { Breakpoints, MobileBreakPoints } from 'constants/screen';
import { TextHeadingTwo } from 'components/TextHeading';

export const Header = styled(TextHeadingTwo)`
  margin: 0;
  color: ${({ theme }) => theme.colors.base};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Button = styled.a`
  text-decoration: none;
  background-color: transparent;

  & > div {
    display: flex;
    background-color: ${({ theme }) => theme.colors.btnPrimaryBackground};
    color: ${({ theme }) => theme.colors.btnPrimaryFont};
    padding: 8px 24px;
    border-radius: 8px;
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    cursor: pointer;
    align-items: center;
    &:hover {
      background-color: ${({ theme }) => theme.colors.fiordLight};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.btnPrimaryBackground};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.catskillWhite};
    }
    height: 48px;

    @media ${Breakpoints.MOBILE} {
      width: 100%;
    }

    @media ${MobileBreakPoints.MOBILE_L} {
      font-size: 24px;
      line-height: 24px;
      padding: 24px 24px;
    }
  }
`;

export const ChangeLogWidget = styled.div`
  margin: 24px 0;
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
`;
