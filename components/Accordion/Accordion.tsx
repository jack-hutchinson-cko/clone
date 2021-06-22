import React, { FC, useState, MouseEvent } from 'react';
import { IconActionChevronDown } from '@cko/icons';
import { StyledAccordionBody } from './AccordionBody';
import { StyledAccordionHead } from './AccordionHead';
import { StyledAccordion } from './Accordion.styles';
import { AccordionProps } from './types';

const Accordion: FC<AccordionProps> = ({ title = null, isExpanded, children, ...props }) => {
  const [isOpen, setOpen] = useState<boolean>(isExpanded ?? false);

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(!isOpen);
  };

  if (title) {
    return (
      <StyledAccordion {...props}>
        <StyledAccordionHead onClick={onClickHandler} isOpen={isOpen} hasTitle>
          <div>{title}</div>
          <IconActionChevronDown />
        </StyledAccordionHead>
        <StyledAccordionBody isOpen={isOpen}>{children}</StyledAccordionBody>
      </StyledAccordion>
    );
  }

  const childrenWithProps = React.Children.map(children, (child) => {
    const newProps = {
      isOpen,
      setOpen,
    };

    if (React.isValidElement(child)) {
      return React.cloneElement(child, newProps);
    }

    return child;
  });

  return <StyledAccordion {...props}>{childrenWithProps}</StyledAccordion>;
};

export default Accordion;
