import styled, { css } from 'styled-components';

import Accordion, { AccordionBody, AccordionHead } from 'components/Accordion';

export const StyledAccordionBody = styled(AccordionBody)`
  padding: 10px 0 10px 15px;
  flex-direction: column;

  > * {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

export const StyledAccordionHead = styled(AccordionHead)`
  padding-bottom: 0;
  font-size: 18px;
  font-weight: 500;
`;

export const StyledAccordion = styled(Accordion)<{ isRoot?: boolean }>`
  padding: 0;
  border-bottom: none;
  color: ${({ theme }) => theme.colors.base};

  ${({ isRoot }) =>
    isRoot &&
    css`
      padding: 30px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight};

      > ${StyledAccordionHead} {
        font-size: 24px;
      }
    `}
`;
