import styled, { css } from 'styled-components';

import Accordion, { AccordionBody, AccordionHead } from 'components/Accordion';
import { MobileBreakPoints } from 'constants/screen';

export const StyledAccordionBody = styled(AccordionBody)`
  padding: 24px 0 10px 15px;
  flex-direction: column;

  @media ${MobileBreakPoints.MOBILE_S} {
    padding-top: 10px !important;
  }

  > * {
    &:not(:first-child) {
      margin-top: 20px;

      @media ${MobileBreakPoints.MOBILE_S} {
        margin-top: 10px;
      }
    }
  }
`;

export const StyledAccordionHead = styled(AccordionHead)`
  padding-bottom: 0;
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.base};
`;

export const StyledAccordion = styled(Accordion)<{ isRoot?: boolean }>`
  padding: 0;
  border-bottom: none;
  color: ${({ theme }) => theme.colors.cometLight};

  > ${StyledAccordionHead} {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.base};

    @media ${MobileBreakPoints.MOBILE_S} {
      font-size: 14px;
      line-height: 24px;
    }
  }

  ${({ isRoot }) =>
    isRoot &&
    css`
      font-weight: 500;
      padding: 40px 0 36px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};

      > ${StyledAccordionHead} {
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;

        @media ${MobileBreakPoints.MOBILE_S} {
          font-size: 16px;
          line-height: 24px;
        }
      }

      > ${StyledAccordionBody} {
        padding-top: 32px;
      }

      @media ${MobileBreakPoints.MOBILE_S} {
        padding: 24px 0;
      }
    `}
`;
