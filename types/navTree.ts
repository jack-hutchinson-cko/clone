export type NavTreeElement = {
  id: string;
  title: string;
  path: string;
  children?: NavTreeElement[];
};

export type NavTreeElementWithFilePatch = {
  id: string;
  title: string;
  path: string;
  filePath: string;
  children: NavTreeElementWithFilePatch[];
};
