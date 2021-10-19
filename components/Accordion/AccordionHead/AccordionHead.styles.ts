import styled, { css } from 'styled-components';
import { createBreakpointTo, SIZE } from 'constants/screen';
import { spacing } from 'constants/spacingSize';

export const StyledAccordionHead = styled.button<{
  isOpen: boolean | undefined;
  hasTitle?: boolean;
  isBoldTitle?: boolean;
  isMdxMode?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${({ isMdxMode }) => (isMdxMode ? `0 0 ${spacing.s50}px 0` : 0)};
  background-color: transparent;
  border: none;
  outline: none;
  color: inherit;
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  text-align: left;
  cursor: pointer;

  & > div,
  & > p {
    mark {
      color: inherit;
      background: transparent;
      font-weight: ${({ isBoldTitle = true }) => (isBoldTitle ? 500 : 300)};
    }

    ${({ isOpen, hasTitle = false, theme }) =>
      hasTitle && isOpen
        ? css`
            mark,
            mark > h3 > span {
              background: linear-gradient(
                to top,
                ${theme.colors.underline} 0 6px,
                transparent 6px 100%
              );
            }
          `
        : ''};
  }

  svg {
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
    & > g {
      fill: ${({ theme }) => theme.colors.stormGray};
    }
    @media ${createBreakpointTo(SIZE.M)} {
      width: 12px;
      height: 6px;
    }
  }
`;
