export type TreeNode<T> = {
  id: number;
  parentId: number | null;
  data: T;
  children: TreeNode<T>[];
};

export type TreeElement = {
  id: number;
  parentId: number | null;
};
