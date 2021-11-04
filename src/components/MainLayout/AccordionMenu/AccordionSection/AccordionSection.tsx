import React, { FC } from 'react';

import { NavigationSectionProps } from 'src/components/NavigationTreeMenu';
import {
  StyledAccordion,
  StyledAccordionBody,
  StyledAccordionHead,
} from './AccordionSection.styles';

export const AccordionSection: FC<NavigationSectionProps> = ({
  link,
  isRoot,
  isOpen,
  children,
}) => (
  <StyledAccordion isRoot={isRoot} isExpanded={isOpen}>
    <StyledAccordionHead clickableTitle={false}>{link}</StyledAccordionHead>
    <StyledAccordionBody>{children}</StyledAccordionBody>
  </StyledAccordion>
);

export default AccordionSection;
