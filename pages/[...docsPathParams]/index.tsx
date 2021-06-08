import { useState, useCallback, useEffect } from 'react'
import { last, get } from 'lodash'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { useRouter } from 'next/router'
import { getHashValue, updateNavigationHash } from 'lib/url'
import { getDocsPathUrl, getPostByUrlId } from 'lib/docsItems'
import BreadCrumbs from 'components/BreadCrumbs'
import DocBody from 'components/DocBody'
import AnchorNavigation from 'components/AnchorNavigation'
import { BreadCrumbsItems, DocContentItem, DocContentItemType } from 'types/content'
import { TextHeadingOne } from '@cko/primitives'
import styles from './docPost.module.scss'

type Props = {
  name: string
  breadCrumbsItem: BreadCrumbsItems
  content: DocContentItem[]
  anchors: DocContentItem[]
}

const DocPost: NextPage<Props> = ({ name, breadCrumbsItem, content, anchors }) => {
  const router = useRouter()
  const [selectedId, setSelectedId] = useState<number>()

  useEffect(() => {
    const slug = getHashValue(router.asPath)
    const anchor = anchors.find((a) => a.params.anchorHref === slug) ?? get(anchors, '[0]')
    setSelectedId(anchor.id)
  }, [router, anchors])

  const onUpdateAnchor = useCallback((anchorId: number, slug?: string) => {
    setSelectedId(anchorId)
    if (slug) updateNavigationHash(slug)
  }, [])

  return (
    <div className={styles.mainWrapper}>
      <article className={styles.content}>
        <header>
          <BreadCrumbs breadCrumbsItem={breadCrumbsItem} />
          <TextHeadingOne className={styles.title}>{name}</TextHeadingOne>
        </header>
        <DocBody content={content} onUpdateAnchor={onUpdateAnchor} />
      </article>
      <div className={styles.navigation}>
        <AnchorNavigation anchors={anchors} selectedId={selectedId} />
      </div>
    </div>
  )
}

export default DocPost

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getDocsPathUrl(),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  const { docsPathParams = [] } = params
  const targetUrl = last(docsPathParams) || ''
  const { name, url, parentsNodes = [], content = [] } = getPostByUrlId(targetUrl) || {}
  const breadCrumbsItem = [
    ...parentsNodes.map((item) => ({ name: item.name, url: item.url })),
    { name, url },
  ]
  const anchors = content.filter(({ type }) => type === DocContentItemType.ANCHOR)
  return {
    props: {
      name,
      breadCrumbsItem,
      content,
      anchors,
    },
  }
}
