import styled from 'styled-components';
import { Breakpoints, MobileBreakPoints } from 'src/constants/screen';

export const Results = styled.div<{ isShown: boolean }>`
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  position: absolute;
  left: 0;
  top: calc(100% + 10px);
  z-index: 1;
  width: 100%;
  min-width: 360px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.backgroundSearch};
  border-radius: 8px;
  box-shadow: 0 0 24px rgb(0 0 0 / 8%);
  color: ${({ theme }) => theme.colors.base};
  text-align: left;

  @media ${Breakpoints.MOBILE} {
    position: initial;
    top: auto;
    left: auto;
    min-width: initial;
    box-shadow: none;
    border-radius: 0;
    border-width: 0;
    display: block;
  }
`;

const innerContainerStyles = `
  padding: 16px 24px;

  @media ${MobileBreakPoints.MOBILE_S} {
    padding: 32px 24px;
  }
`;

export const ResultItemsContainer = styled.div`
  ${innerContainerStyles}
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TextFieldWrapper = styled.div`
  position: relative;
  cursor: initial;
`;
