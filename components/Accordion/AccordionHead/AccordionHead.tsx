import React, { FC, MouseEvent } from 'react';
import { IconActionChevronDown } from '@cko/icons';
import { AccordionHeadProps } from '../types';
import { StyledAccordionHead } from './AccordionHead.styles';

const AccordionHead: FC<AccordionHeadProps> = ({ isOpen, setOpen, children, ...props }) => {
  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (setOpen) {
      setOpen(!isOpen);
    }
  };

  return (
    <StyledAccordionHead onClick={onClickHandler} isOpen={isOpen} {...props}>
      <div>{children}</div>
      <IconActionChevronDown />
    </StyledAccordionHead>
  );
};

export default AccordionHead;
