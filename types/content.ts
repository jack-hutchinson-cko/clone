export type DocContentItemType = 'TEXT' | 'ANCHOR'

export type DocContentItem = {
  data: string
  params: { anchorHref?: string }
  type: DocContentItemType
  id: number
}

export type DocItem = {
  name: string
  url: string
  id: number
  parentId: number | null
  content: Array<DocContentItem>
}

export type DocItemWithParentNodes = DocItem & {
  parentsNodes: Array<DocItem>
}

export type BreadCrumbsItems = Array<{ name: string; url: string }>
