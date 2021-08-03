import styled, { css } from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';

export const StyledAccordionHead = styled.button<{
  isOpen: boolean | undefined;
  hasTitle?: boolean;
  isBoldTitle?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 0 5px;
  background-color: transparent;
  border: none;
  outline: none;
  color: inherit;
  font-family: inherit;
  font-size: 16px;
  font-weight: 300;
  text-align: left;
  line-height: 32px;
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
            mark {
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
    @media ${MobileBreakPoints.MOBILE_S} {
      width: 12px;
      height: 6px;
    }
  }
`;
