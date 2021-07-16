import React, { FC } from 'react';

import { NavigationSectionProps } from 'components/NavigationTreeMenu';
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
    <StyledAccordionHead isRoot={isRoot} clickableTitle={false}>
      {link}
    </StyledAccordionHead>
    <StyledAccordionBody>{children}</StyledAccordionBody>
  </StyledAccordion>
);

export default AccordionSection;
