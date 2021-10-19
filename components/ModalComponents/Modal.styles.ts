import styled from 'styled-components';
import { Breakpoints, createBreakpointTo, SIZE } from 'constants/screen';
import { spacing } from 'constants/spacingSize';

export const ModalRoot = styled.div<{ isOpen?: boolean }>`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  padding: ${spacing.s50}px;
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  @media ${Breakpoints.MOBILE} {
    padding: ${spacing.s60}px ${spacing.s90}px;
  }

  @media ${createBreakpointTo(SIZE.SM)} {
    padding: ${spacing.s80}px ${spacing.s50}px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const IconClose = styled.span`
  position: absolute;
  right: 44px;
  top: 37px;
  width: 25px;
  height: 25px;
  z-index: 10;

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 32px;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.successLight};
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }

  @media ${createBreakpointTo(SIZE.SM)} {
    right: ${spacing.s50}px;
    top: ${spacing.s50}px;
  }
`;
