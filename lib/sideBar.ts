import { NavTreeElement } from 'types/sideBar'

export const mapToNavTree = <T>(
  arr: T[] = [],
  mapElement: (e: T) => NavTreeElement & { parentId?: number }
): NavTreeElement[] => {
  const parentsMap: { [key: string]: number } = {}
  const map: { [key: string]: number } = {}
  const nodes: NavTreeElement[] = []
  const result: NavTreeElement[] = []

  arr.forEach((data, i) => {
    const { parentId, ...navTreeElement } = mapElement(data)
    map[navTreeElement.id] = i
    if (parentId) parentsMap[navTreeElement.id] = parentId
    nodes.push(navTreeElement)
  })

  nodes.forEach((node) => {
    if (parentsMap[node.id]) nodes[map[parentsMap[node.id]]]?.children?.push(node)
    else result.push(node)
  })
  return result
}
