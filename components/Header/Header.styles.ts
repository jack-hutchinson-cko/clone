import styled, { css } from 'styled-components';
import { OutlineButton } from '@cko/primitives';
import { IconActionChevronDown } from 'components/Icons';

export const Navigation = styled.header`
  display: block;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight};
  box-sizing: content-box;
`;

export const NavigationContent = styled.nav<{ isMobile?: boolean }>`
  position: relative;
  display: flex;
  max-width: 1360px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 26px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 1;

  ${({ isMobile }) =>
    isMobile &&
    css`
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;
      padding: 0;
      margin: 0;
      font-size: 24px;
      line-height: 32px;
      font-weight: 300;
    `}
`;

export const NavigationSection = styled.div<{ isMobile?: boolean }>`
  display: inline-flex;
  gap: 30px;

  ${({ isMobile }) =>
    isMobile &&
    css`
      display: flex;
      justify-content: center;
      flex: 1;
      gap: 0;

      &:first-child {
        justify-content: space-between;
      }

      &:not(:last-child) {
        padding: 0 26px;
        border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight};
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
`;

export const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 1px;
  color: #0c1142;
`;

export const NavigationItem = styled.div<{ withHover?: boolean; isSelected?: boolean }>`
  display: flex;
  height: 80px;
  align-items: center;
  padding-top: 4px;
  border-bottom: 4px solid
    ${({ isSelected, theme }) => (isSelected ? theme.colors.focus : 'transparent')};
  transition: border-bottom 100ms;
  cursor: pointer;

  ${({ withHover }) =>
    withHover &&
    css`
      &:hover {
        border-bottom-color: ${({ theme }) => theme.colors.focus};
      }
    `}
`;

export const NavigationLink = styled.a<{ light?: boolean; underline?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: ${({ light }) => (light ? 400 : 600)};
  cursor: pointer;

  ${({ underline }) =>
    underline
      ? css`
          text-decoration: underline;
        `
      : css`
          &:hover {
            text-decoration: underline;
          }
        `};
`;

export const ToggleIcon = styled(IconActionChevronDown)<{ isOpen?: boolean }>`
  margin-left: 10px;
  transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0')});
  transition: transform 150ms;
`;

export const Extra = styled.div<{ isMobile?: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.baseLight};

  ${({ isMobile }) =>
    isMobile
      ? css`
          width: 100%;
          font-size: 18px;
          line-height: 24px;
        `
      : css`
          width: 420px;
          font-size: 14px;
          line-height: 24px;
        `}
`;
export const ExtraContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin: 0;
  padding: 24px 32px;
  background: ${({ theme }) => theme.colors.white};
`;

export const ExtraFooter = styled(ExtraContent)`
  background: ${({ theme }) => theme.colors.greyLight};
`;

export const ExtraItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  color: ${({ theme }) => theme.colors.base};
  font-weight: 400;
`;

export const ExtraItemActions = styled.span<{ gap?: number }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }) => gap ?? 6}px;
`;

export const ButtonLogin = styled(OutlineButton)`
  padding: 12px 24px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.base};
  background: ${({ theme }) => theme.colors.blueTertiary};
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const SearchFieldWrapper = styled.div`
  display: inline-block;
  width: 380px;
`;
