import { docsItems } from 'mocks/docs'
import { DocItem, DocItemWithParentNodes } from 'types/content'

type findAllParentsNodesType = { docsItemsMapById: Record<string, DocItem>; docsItem: DocItem }
const findAllParentsNodes = ({
  docsItemsMapById,
  docsItem,
}: findAllParentsNodesType): Array<DocItem> => {
  const parentNodes = []

  let currentParentId = docsItem.parentId
  do {
    if (currentParentId && docsItemsMapById[currentParentId]) {
      parentNodes.push(docsItemsMapById[currentParentId])
      currentParentId = docsItemsMapById[currentParentId].parentId
    }
  } while (currentParentId)

  return parentNodes.reverse()
}

export const getDocsWithParentItems = (): Array<DocItemWithParentNodes> => {
  const docsItemsMapById = docsItems.reduce(
    (result, docItemData) => ({
      ...result,
      [docItemData.id]: docItemData,
    }),
    {}
  )

  return docsItems.map((docsItem) => ({
    ...docsItem,
    parentsNodes: findAllParentsNodes({ docsItemsMapById, docsItem }),
  }))
}

type getDocsPathUrlReturnType = Array<{ params: { docsPathParams: Array<string> } }>

export const getDocsPathUrl = (): getDocsPathUrlReturnType =>
  getDocsWithParentItems().map(({ parentsNodes, url }) => ({
    params: {
      docsPathParams: [...parentsNodes.map((parent) => parent.url), url],
    },
  }))

export const getPostByUrlId = (url: string): DocItemWithParentNodes | undefined =>
  getDocsWithParentItems().find((docsData) => docsData.url === url)

type getSideBarLinksReturnType = Array<{ link: string; name: string }>

export const getSideBarLinks = (): getSideBarLinksReturnType =>
  getDocsWithParentItems().map(({ parentsNodes, name, url }) => ({
    link: `/${[...parentsNodes.map((parent) => parent.url), url].join('/')}`,
    name: [...parentsNodes.map((parent) => parent.name), name].join(' / '),
  }))
