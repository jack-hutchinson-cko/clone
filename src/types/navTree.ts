import { ReactNode } from 'react';

export type NavTreeElement = {
  id: string;
  title: string;
  path: string;
  children?: NavTreeElement[];
  icon?: ReactNode;
  type?: string;
};

export type NavTreeElementWithFilePatch = {
  id: string;
  title: string;
  path: string;
  filePath: string;
  children: NavTreeElementWithFilePatch[];
};