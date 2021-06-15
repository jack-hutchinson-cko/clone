import { FC } from 'react';

export type HeaderLink = {
  title: string;
  Icon: FC<unknown>;
  url?: string;
  description?: string;
};

export type HeaderContent = {
  guides: HeaderLink[];
};
