import styled from 'styled-components';
import { SIZE } from 'constants/screen';
import { TextHeadingTwo } from 'components/TextHeading';

export const Header = styled(TextHeadingTwo)`
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
  }
  @media (min-width: ${SIZE.XS}px) and (max-width: ${SIZE.SM}px) {
    gap: 40px;
  }

  @media (max-width: ${SIZE.XS - 1}px) {
    gap: 16px;
  }
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
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    height: 48px;
    &:hover {
      background-color: ${({ theme }) => theme.colors.fiordLight};
    }

    &:focus {
      background-color: ${({ theme }) => theme.colors.btnPrimaryBackground};
    }

    &:disabled {
      background-color: ${({ theme }) => theme.colors.catskillWhite};
    }

    @media (min-width: ${SIZE.XS}px) and (max-width: ${SIZE.SM}px) {
      font-size: 24px;
      height: 76px;
    }

    @media (max-width: ${SIZE.SM}px) {
      width: 100%;
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
