import { FC } from 'react';

export type HeaderGuid = {
  Icon: FC<unknown>;
  url: string;
  title: string;
  description: string;
};

export type HeaderContent = {
  guides: HeaderGuid[];
};
