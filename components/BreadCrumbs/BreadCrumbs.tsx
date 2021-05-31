import { FunctionComponent } from 'react'
import Link from 'next/link'

type Props = {
  breadCrumbsItem: Array<{ name: string; url: string }>
}

const getTotalLink = ({
  parentsNodes,
  url,
}: {
  parentsNodes: Array<{ name: string; url: string }>
  url: string
}): string =>
  `/${parentsNodes
    .map((parentItem) => parentItem.url)
    .concat(url)
    .join('/')}`

const BreadCrumbs: FunctionComponent<Props> = ({ breadCrumbsItem }) => (
  <div>
    {breadCrumbsItem.map((parentNode, index) => (
      <span key={parentNode.url}>
        <Link
          href={getTotalLink({
            parentsNodes: breadCrumbsItem.slice(0, index),
            url: parentNode.url,
          })}
        >
          <a>{parentNode.name}</a>
        </Link>
        {index !== breadCrumbsItem.length - 1 ? ' / ' : ''}
      </span>
    ))}
  </div>
)

export default BreadCrumbs
