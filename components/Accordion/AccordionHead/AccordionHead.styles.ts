import styled, { css } from 'styled-components';

export const StyledAccordionHead = styled.button<{
  isOpen: boolean | undefined;
  hasTitle?: boolean;
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
  font-weight: 500;
  text-align: left;
  line-height: 24px;
  cursor: pointer;

  & > div,
  & > p {
    mark {
      background: transparent;
      color: inherit;
    }

    ${({ isOpen, theme }) =>
      isOpen
        ? css`
            mark {
              background: linear-gradient(
                to top,
                ${theme.colors.turquoise} 0 6px,
                transparent 6px 100%
              );
            }
          `
        : ''};
  }

  svg {
    width: 20px;
    height: 20px;
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
  }
`;
