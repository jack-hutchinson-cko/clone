import React, { FC, useState, MouseEvent, useRef } from 'react';
import { IconActionChevronDown } from '@cko/icons';
import { StyledAccordionHead } from './AccordionHead';
import { StyledAccordion, AccordionBodyWrapper } from './Accordion.styles';
import { AccordionProps } from './types';
import { getHeightOfInnerContent } from './utils';

const Accordion: FC<AccordionProps> = ({
  title = null,
  isExpanded,
  children,
  isBoldTitle,
  ...props
}) => {
  const [isOpen, setOpen] = useState<boolean>(isExpanded ?? false);
  const bodyElement = useRef(null);

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(!isOpen);
  };

  const height = getHeightOfInnerContent(bodyElement.current);

  if (title) {
    return (
      <StyledAccordion {...props}>
        <StyledAccordionHead
          onClick={onClickHandler}
          isOpen={isOpen}
          isBoldTitle={isBoldTitle}
          hasTitle
        >
          <div>
            <mark>{title}</mark>
          </div>
          <IconActionChevronDown />
        </StyledAccordionHead>
        <AccordionBodyWrapper height={isOpen ? height : 0}>
          <div ref={bodyElement}>{children}</div>
        </AccordionBodyWrapper>
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
