import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import { IconActionChevronDown } from 'components/Icons';

export const ControlWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 24px 0;
  flex-wrap: wrap;
`;

export const ControlColorItem = styled.div<{ isSelected?: boolean }>`
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid
    ${({ isSelected, theme }) => (isSelected ? theme.colors.textHighlight : theme.colors.border)};
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  width: calc(33% - 10px);
`;

export const InputContainer = styled.div`
  display: flex;
  margin: 16px 0;
  gap: 8px;
`;

export const InputIcon = styled.div<{ isSmall?: boolean }>`
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: ${({ isSmall }) => (isSmall ? 'calc(50% - 4px)' : '100%')};
  height: 16px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: -8px;
    left: 0px;
    width: ${({ isSmall }) => (isSmall ? '50%' : '25%')};
    border-top: 1px solid ${({ theme }) => theme.colors.grayFaded};
  }
`;

export const ButtonIcon = styled.div<{ color: string }>`
  border-radius: 2px;
  height: 16px;
  background: ${({ color }) => color};
  margin: 16px 0;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 33%;
    width: 33%;
    border-top: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

export const RadioIcon = styled.div<{ isSelected: boolean }>`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  margin: 0px auto;
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.textHighlight : 'transparent'};
  border: 1px solid
    ${({ isSelected, theme }) => (isSelected ? theme.colors.textHighlight : theme.colors.border)};
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.white};
    transform: translate(-50%, -50%);
  }
`;

export const FontName = styled.div<{ isSelected: boolean }>`
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.textHighlight : theme.colors.white};
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.white : theme.colors.base)};
  border-radius: 16px;
  padding: 8px 8px;
  border: 1px solid
    ${({ isSelected, theme }) => (isSelected ? theme.colors.textHighlight : theme.colors.border)};
  margin: 0 auto;
  font-size: 12px;
  text-align: center;
  text-transform: capitalize;
`;

export const FontPreview = styled.div<{
  fontSize: string;
}>`
  height: 72px;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ theme }) => theme.colors.base};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 24px 0;
`;

export const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  min-width: 300px;
  padding: 12px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.manatee};
  position: relative;
  color: ${({ theme }) => theme.colors.base};
  font-size: 14px;
  line-height: 14px;
`;

export const StyledIconActionChevronDown = styled(IconActionChevronDown)<{ isOpen: boolean }>`
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : '')};
  margin-left: auto;
`;

export const StyledReactSVG = styled(ReactSVG)<{ width?: number; height?: number }>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  div,
  svg {
    width: 100%;
    height: 100%;
  }
  svg {
    border-radius: 2px;
  }
`;

export const HeaderValue = styled.div`
  margin-left: 8px;
`;

export const DropDownBody = styled.div`
  position: absolute;
  left: 0;
  min-width: 100%;
  top: calc(100% + 16px);
  z-index: 10;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.base};
  font-size: 14px;
  max-height: 150px;
  overflow-y: auto;
  border-radius: 8px;
`;

export const DropDownOption = styled.div<{ isSelected?: boolean }>`
  background: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.dullLavender : theme.colors.athensGray};
  white-space: nowrap;
  padding: 8px;

  &:hover {
    background-color: ${({ theme, isSelected }) => !isSelected && theme.colors.backgroundDark};
  }
`;
