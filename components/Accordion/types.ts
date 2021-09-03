import { ReactNode, Dispatch, SetStateAction } from 'react';

export type AccordionProps = {
  title?: string | ReactNode;
  children: ReactNode;
  isExpanded?: boolean;
  isBoldTitle?: boolean;
  hasTitle?: boolean;
  headerIcon?: ReactNode;
  headerComponent?: ReactNode;
};

export type AccordionBodyProps = {
  isOpen?: boolean;
  children: ReactNode;
};

export type AccordionHeadProps = {
  isOpen?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  clickableTitle?: boolean;
  children: ReactNode;
};
