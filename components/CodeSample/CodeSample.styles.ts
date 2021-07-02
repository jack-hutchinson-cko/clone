import styled from 'styled-components';
import { Text } from '@cko/primitives';
import { IconActionChevronDown } from '../Icons/Icons';

export const Pre = styled.pre<{
  lineToShow: number;
  isOpen: boolean;
  isCollapsible: boolean;
  checkLengthWithCollabsible: boolean;
  withBorder: boolean;
}>`
  background: ${({ theme }) => theme.colors.codeLabelBackground};
  line-height: 24px;
  padding: 24px;
  overflow-y: hidden;
  margin: 0;
  border-radius: ${({ withBorder }) => (withBorder ? '8px' : `0`)};
  border: ${({ withBorder, theme }) =>
    withBorder ? `1px solid ${theme.colors.greyLight}` : 'none'};
  &:after {
    content: '';
    width: 100%;
    display: ${({ isCollapsible, checkLengthWithCollabsible, isOpen }) =>
      isCollapsible && checkLengthWithCollabsible && !isOpen ? 'block' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      180deg,
      rgba(245, 245, 252, 0) 0%,
      ${({ theme }) => theme.colors.codeLabelBackground} 100%
    );
    pointer-events: none;
  }
`;

export const Line = styled.div`
  display: table-row;
  & > .property,
  & > .operator,
  & > .selector,
  & > .tag {
    color: ${({ theme }) => theme.colors.base} !important;
  }
  & > .string,
  & > .atrule {
    color: ${({ theme }) => theme.colors.tokenString} !important;
  }
  & > .number,
  & > .unit {
    color: ${({ theme }) => theme.colors.tokenNumber} !important;
  }
  & > .punctuation {
    color: ${({ theme }) => theme.colors.greyDark} !important;
  }
`;

export const StyledIcons = styled.div`
  position: absolute;
  opacity: 0;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

export const HighlightContainer = styled.div`
  position: relative;
  &:hover ${StyledIcons} {
    transition: 1s;
    opacity: 1;
  }
`;

export const IconArrowActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -15px;
  right: 47%;
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  border-radius: 50%;
  cursor: pointer;
`;

export const IconArrowAction = styled(IconActionChevronDown)<{ isOpen: boolean }>`
  transform: rotate(${({ isOpen }) => (!isOpen ? 0 : '180deg')});
  transition: transform 150ms;
`;

export const StyledText = styled(Text)`
  font-size: 12px;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 15px;
  user-select: none;
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.greyDark};
`;
