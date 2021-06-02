import { FC, useMemo, ReactNode } from 'react'
import Link from 'next/link'
import { DocItem } from 'types/content'
import { TreeNode } from 'types/tree'
import { mapToTree } from 'lib/sideBar'

import ListSection from './ListSection'
import ListItem from './ListItem'

const resolveUrl = (slug: string, baseUrl?: string): string =>
  `/${baseUrl ? baseUrl + `/${slug}` : slug}`

const renderSegment = ({ data, children }: TreeNode<DocItem>, baseUrl?: string): ReactNode => {
  const link = <Link href={resolveUrl(data.url, baseUrl)}>{data.name}</Link>

  if (children.length) {
    return (
      <ListSection key={data.id} link={link}>
        {children.map((n) => renderSegment(n, baseUrl ? baseUrl + '/' + data.url : data.url))}
      </ListSection>
    )
  }
  return <ListItem key={data.id} link={link} />
}

const SideBar: FC<{ sideBarDocs: DocItem[] }> = ({ sideBarDocs }) => {
  const categoriesTreeNodes: TreeNode<DocItem>[] = useMemo(() => {
    return mapToTree<DocItem>(sideBarDocs, ({ id, parentId }) => ({ id, parentId }))
  }, [sideBarDocs])

  return (
    <aside>
      <h1>SideBar</h1>
      {categoriesTreeNodes.map((c) => renderSegment(c))}
    </aside>
  )
}

export default SideBar
