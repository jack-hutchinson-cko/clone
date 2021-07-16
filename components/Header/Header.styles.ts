import styled, { css } from 'styled-components';

import { IconActionChevronDown } from 'components/Icons';
import { Breakpoints, MobileBreakPoints, SIZE } from 'constants/screen';

export const NavigationContent = styled.nav`
  position: relative;
  display: flex;
  max-width: 1360px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 26px;
  z-index: 1;
`;

export const NavigationSection = styled.div<{ isMobile?: boolean }>`
  display: inline-flex;
  gap: 30px;

  @media (min-width: ${SIZE.L}px) and (max-width: 1070px) {
    gap: 15px;
  }
`;

export const MiddleNavigationSection = styled(NavigationSection)`
  @media ${Breakpoints.TABLET} {
    flex: 1;
    margin: 0 25px 0 50px;
  }
`;

export const Navigation = styled.header<{ isMobile?: boolean }>`
  display: block;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: content-box;

  ${({ isMobile }) =>
    isMobile &&
    css`
      ${NavigationContent} {
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        padding: 0;
        margin: 0;
        font-size: 24px;
        line-height: 32px;
        font-weight: 300;
      }

      ${NavigationSection} {
        display: flex;
        justify-content: center;
        flex: 1;
        gap: 0;

        &:first-child {
          justify-content: space-between;
        }

        &:not(:last-child) {
          padding: 0 26px;
          border-bottom: 1px solid ${({ theme }) => theme.colors.border};
        }
      }
    `}
`;

export const NavigationDrawers = styled.div`
  position: absolute;
  left: 0;
  top: 81px;
  display: flex;
  width: 100vw;
  height: calc(100vh - 81px);
  pointer-events: none;
  z-index: 2;

  @media ${Breakpoints.MOBILE} {
    top: 109.5px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    top: 66px;
  }
`;

export const NavigationItem = styled.div<{
  withHover?: boolean;
  isSelected?: boolean;
  withPointer?: boolean;
}>`
  display: flex;
  height: 80px;
  align-items: center;
  padding-top: 4px;
  border-bottom: 4px solid
    ${({ isSelected, theme }) => (isSelected ? theme.colors.base : 'transparent')};
  transition: border-bottom 100ms;
  color: ${({ theme }) => theme.colors.base};
  font-size: 16px;
  line-height: 24px;

  ${({ withHover }) =>
    withHover &&
    css`
      &:hover {
        border-bottom-color: ${({ theme }) => theme.colors.base};
      }
    `}

  ${({ withPointer = true }) => withPointer && 'cursor: pointer;'}

  svg {
    color: ${({ theme }) => theme.colors.sectionIcon};
  }

  @media ${Breakpoints.MOBILE} {
    height: 108.5px;
    font-size: 24px;
    line-height: 32px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    height: 65px;
    font-size: 16px;
  }
`;

export const MiddleNavigationItem = styled(NavigationItem)`
  @media ${Breakpoints.TABLET} {
    flex: 1;
  }
`;

export const NavigationLink = styled.a<{
  light?: boolean;
  fullWidth?: boolean;
  underlineOnHover?: boolean;
  underlineAlways?: boolean;
  large?: boolean;
}>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.base};
  font-weight: ${({ light }) => (light ? 400 : 500)};
  outline: none;

  ${({ large }) =>
    large &&
    css`
      font-size: 16px;
    `};

  ${({ underlineAlways }) =>
    underlineAlways &&
    css`
      cursor: pointer;
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    `};

  ${({ underlineOnHover }) =>
    underlineOnHover &&
    css`
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    `}

  svg {
    color: ${({ theme }) => theme.colors.sectionIcon};
  }
`;

export const ButtonLogin = styled.a<{ fullWidth?: boolean }>`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.btnTertiaryFont};
  background: ${({ theme }) => theme.colors.blueTertiary};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      display: block;
      width: 100%;
    `}
`;

export const ToggleIcon = styled(IconActionChevronDown)<{ isOpen?: boolean }>`
  margin-left: 10px;
  transform: rotate(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
  transition: transform 150ms;
`;

export const SearchFieldWrapper = styled.div`
  display: inline-block;
  width: 370px;

  @media ${Breakpoints.TABLET} {
    width: 100%;
    max-width: 370px;
  }
`;

export const SwitchIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
`;

export const DrawerTopContentWrapper = styled.div`
  padding: 30px;
  background: ${({ theme }) => theme.colors.background};
`;

export const DrawerBottomContentWrapper = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDark};
  padding: 30px;
  width: 100%;
  flex: 1;
`;
