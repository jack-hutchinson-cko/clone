import styled, { css } from 'styled-components';
import { IconEarth, WhatsNewIcon } from 'src/components/Icons';
import Accordion, { AccordionBody, AccordionHead } from 'src/components/Accordion';

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
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};

      > ${StyledAccordionHead} {
        font-size: 24px;
      }
    `}
`;

export const StyledIconEarth = styled(IconEarth)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.sectionIcon};
`;

export const StyledWhatsNewIcon = styled(WhatsNewIcon)`
  color: ${({ theme }) => theme.colors.sectionIcon};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const WhatsNewWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const HomeWrapper = styled.div`
  position: relative;
`;
