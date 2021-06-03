import { FC, useMemo, ReactNode } from 'react'
import { useRouter } from 'next/router'

import { DocItem } from 'types/content'
import { TreeNode } from 'types/tree'
import { mapToTree } from 'lib/sideBar'

import ListSection from './ListSection'
import ListItem from './ListItem'
import ListItemLink from './ListItemLink'

const resolveUrl = (slug: string, baseUrl?: string): string =>
  `/${baseUrl ? baseUrl + `/${slug}` : slug}`

const renderSegment = (
  { data, children }: TreeNode<DocItem>,
  activeLink: string,
  baseUrl?: string
): ReactNode => {
  const isRoot = data.parentId === null
  const path = resolveUrl(data.url, baseUrl)
  const link = (
    <ListItemLink href={path} active={path === activeLink}>
      {data.name}
    </ListItemLink>
  )

  if (children.length) {
    return (
      <ListSection key={data.id} isRoot={isRoot} link={link}>
        {children.map((n) =>
          renderSegment(n, activeLink, baseUrl ? baseUrl + '/' + data.url : data.url)
        )}
      </ListSection>
    )
  }
  return <ListItem key={data.id} link={link} isRoot={isRoot} />
}

const SideBar: FC<{ sideBarDocs: DocItem[] }> = ({ sideBarDocs }) => {
  const { asPath } = useRouter()
  const categoriesTreeNodes: TreeNode<DocItem>[] = useMemo(() => {
    return mapToTree<DocItem>(sideBarDocs, ({ id, parentId }) => ({ id, parentId }))
  }, [sideBarDocs])
  return (
    <aside>
      <ListItem
        isRoot
        link={
          <ListItemLink href={'/'} active={'/' === asPath}>
            Home
          </ListItemLink>
        }
      />
      {categoriesTreeNodes.map((c) => renderSegment(c, asPath))}
    </aside>
  )
}

export default SideBar
