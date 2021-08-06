import styled from 'styled-components';
import { Text } from '@cko/primitives';
import { IconActionChevronDown } from '../Icons/Icons';

export const PreWrapper = styled.div<{
  withBorder: boolean;
  showBlurBackground?: boolean;
  height?: number;
}>`
  background: ${({ theme }) => theme.colors.codeLabelBackground};
  line-height: 24px;
  padding: 0 24px;
  margin: 0;
  border-radius: ${({ withBorder }) => (withBorder ? '8px' : `0`)};
  border: ${({ withBorder, theme }) => (withBorder ? `1px solid ${theme.colors.border}` : 'none')};
  overflow: hidden;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  transition: height 1s ease;

  &:after {
    content: '';
    width: 100%;
    height: 40%;
    display: ${({ showBlurBackground }) => (showBlurBackground ? 'block' : 'none')};
    position: absolute;
    left: 0;
    bottom: 0px;
    background: linear-gradient(
      180deg,
      rgba(245, 245, 252, 0) 0%,
      ${({ theme }) => theme.colors.codeLabelBackground} 85%
    );
    border-radius: ${({ withBorder }) => (withBorder ? '8px' : `0`)};
    pointer-events: none;
  }
  display: flex;
  gap: 16px;
`;

export const HorizontalScrollWrapper = styled.div<{ isBlockScroll?: boolean }>`
  overflow-y: hidden;
  overflow-x: ${({ isBlockScroll }) => (isBlockScroll ? 'hidden' : 'scroll')};
  padding: 24px 0;
  flex-grow: 1;
`;

export const Pre = styled.pre`
  margin: 0;
  position: relative;
  font-size: 14px;
`;

export const InputSizer = styled.div`
  position: relative;
  white-space: pre-wrap;
  border: 0;
  padding: 0;
  font-weight: 400;
  font-family: monospace;
  font-size: 14px;
  display: flex;
`;

export const StyledTextArea = styled.textarea<{ width: string; isHidden?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width};
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  line-height: 24px;
  z-index: ${({ isHidden }) => (isHidden ? '-1' : '1')};
  border: 0;
  padding: 0;
  font-weight: 400;
  font-family: monospace;
  font-size: 14px;
  overflow: hidden;
  &:focus-visible {
    outline: none;
  }
  color: transparent;
  background: transparent;
  caret-color: ${({ theme }) => theme.colors.base};
  tab-size: 1;
  white-space: nowrap;
  resize: none;
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

export const StyledIconLink = styled(StyledIcons)`
  right: 50px;
`;

export const HighlightContainer = styled.div`
  position: relative;
  &:hover {
    ${StyledIcons},
    ${StyledIconLink} {
      transition: 1s;
      opacity: 1;
    }
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
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  cursor: pointer;
`;

export const IconArrowAction = styled(IconActionChevronDown)<{ isOpen: boolean }>`
  transform: rotate(${({ isOpen }) => (!isOpen ? 0 : '180deg')});
  transition: transform 150ms;
`;

export const StyledText = styled(Text)`
  font-size: 10px;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 15px;
  user-select: none;
  opacity: 0.5;
  color: ${({ theme }) => theme.colors.greyDark};
`;

export const LineNumber = styled.div`
  color: ${({ theme }) => theme.colors.greyDark};
  text-align: right;
  user-select: none;
  opacity: 0.5;
`;

export const LineCounterWrapper = styled.div`
  padding: 24px 0;
  flex-grow: 0;
`;
