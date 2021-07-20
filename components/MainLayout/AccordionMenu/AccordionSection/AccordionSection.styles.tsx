import styled, { css } from 'styled-components';

import Accordion, { AccordionBody, AccordionHead } from 'components/Accordion';
import { MobileBreakPoints } from 'constants/screen';

export const StyledAccordionBody = styled(AccordionBody)`
  padding: 10px 0 10px 15px;
  flex-direction: column;

  > * {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
`;

export const StyledAccordionHead = styled(AccordionHead)<{ isRoot?: boolean }>`
  padding-bottom: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${({ isRoot, theme }) => (isRoot ? theme.colors.base : theme.colors.baseList)};

  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const StyledAccordion = styled(Accordion)<{ isRoot?: boolean }>`
  padding: 0;
  border-bottom: none;
  color: ${({ theme }) => theme.colors.cometLight};

  ${({ isRoot }) =>
    isRoot &&
    css`
      font-weight: 500;
      padding: 40px 0 36px 0;
      & > mark {
        font-weight: 500 !important;
      }
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};

      > ${StyledAccordionHead} {
        font-size: 32px;
        line-height: 32px;

        @media ${MobileBreakPoints.MOBILE_S} {
          font-size: 18px;
          line-height: 20px;
        }
      }
      @media ${MobileBreakPoints.MOBILE_S} {
        padding: 24px 0;
      }
    `}
`;
