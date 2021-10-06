import React, { FC, MouseEvent, useRef } from 'react';
import { IconActionAccordion } from 'components/Icons';
import { AccordionHeadProps } from '../types';
import { StyledAccordionHead } from './AccordionHead.styles';

const AccordionHead: FC<AccordionHeadProps> = ({
  isOpen,
  setOpen,
  children,
  clickableTitle = true,
  ...props
}) => {
  const iconRef = useRef<HTMLSpanElement>(null);
  const onClickHandler = (evt: MouseEvent<HTMLButtonElement>) => {
    if (
      clickableTitle ||
      evt.target === iconRef.current ||
      iconRef.current?.contains(evt.target as Node)
    ) {
      evt.preventDefault();
      setOpen?.(!isOpen);
    }
  };

  return (
    <StyledAccordionHead onClick={onClickHandler} isOpen={isOpen} {...props}>
      <div>{children}</div>
      <span ref={iconRef}>
        <IconActionAccordion width={18} />
      </span>
    </StyledAccordionHead>
  );
};

export default AccordionHead;
