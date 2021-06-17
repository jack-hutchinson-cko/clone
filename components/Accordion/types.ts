import { ReactNode, Dispatch, SetStateAction } from 'react';

export type AccordionProps = {
  title?: string;
  children: ReactNode;
};

export type AccordionBodyProps = {
  isOpen?: boolean;
  children: ReactNode;
};

export type AccordionHeadProps = {
  isOpen?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
};
