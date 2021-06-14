export type NavTreeElement = {
  id: number;
  title: string;
  path: string;
  children?: NavTreeElement[];
};
