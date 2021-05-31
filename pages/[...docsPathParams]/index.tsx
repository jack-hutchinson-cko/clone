import { last } from 'lodash'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { getDocsPathUrl, getPostByUrlId } from '../../lib/docsItems'
import BreadCrumbs from '../../components/BreadCrumbs'
import DocBody from '../../components/DocBody'
import AnchorNavigation from '../../components/AnchorNavigation'
import styles from './docPost.module.scss'
import { BreadCrumbsItems, DocContentItem } from '../../types/content'

type Props = {
  name: string
  breadCrumbsItem: BreadCrumbsItems
  content: Array<DocContentItem>
  anchors: Array<DocContentItem>
}

const DocPost: NextPage<Props> = ({ name, breadCrumbsItem, content, anchors }) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.content}>
        <BreadCrumbs breadCrumbsItem={breadCrumbsItem} />
        <h1>{name}</h1>
        <DocBody content={content} />
      </div>
      <div className={styles.navigation}>
        <AnchorNavigation anchors={anchors} />
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
  const breadCrumbsItem = [...parentsNodes, { name, url }]
  const anchors = content.filter(({ type }) => type === 'ANCHOR')
  return {
    props: {
      name,
      breadCrumbsItem,
      content,
      anchors,
    },
  }
}
