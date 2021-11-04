import React, { FC } from 'react';
import { AccordionBodyProps } from '../types';
import { StyledAccordionBody } from './AccordionBody.styles';

const AccordionBody: FC<AccordionBodyProps> = ({ isOpen, children, ...props }) => {
  return (
    <StyledAccordionBody isOpen={isOpen} {...props}>
      {children}
    </StyledAccordionBody>
  );
};

export default AccordionBody;
