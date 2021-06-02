import { TreeElement, TreeNode } from 'types/tree';

export const mapToTree = <T>(arr: T[] = [], mapElement: (e: T) => TreeElement): TreeNode<T>[] => {
  const map: { [key: string]: number } = {}
  const nodes: TreeNode<T>[] = []
  const result: TreeNode<T>[] = []

  arr.forEach((data, i) => {
    const { id, parentId } = mapElement(data)
    map[id] = i
    nodes.push({ data, id, parentId, children: [] })
  })

  nodes.forEach((node) => {
    if (node.parentId !== null) {
      nodes[map[node.parentId]]?.children?.push(node)
    } else {
      result.push(node)
    }
  })
  return result
}
