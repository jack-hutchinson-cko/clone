import React, { FC, MouseEvent, useRef } from 'react';
import { IconActionChevronDown } from '@cko/icons';
import { AccordionHeadProps } from '../types';
import { StyledAccordionHead } from './AccordionHead.styles';

const AccordionHead: FC<AccordionHeadProps> = ({
  isOpen,
  setOpen,
  children,
  clickableTitle = true,
  ...props
}) => {
  const iconRef = useRef(null);
  const onClickHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    if (clickableTitle || evt.target === iconRef.current) {
      evt.preventDefault();
      setOpen?.(!isOpen);
    }
  };

  return (
    <StyledAccordionHead onClick={onClickHandler} isOpen={isOpen} {...props}>
      <div>{children}</div>
      <IconActionChevronDown ref={iconRef} />
    </StyledAccordionHead>
  );
};

export default AccordionHead;
