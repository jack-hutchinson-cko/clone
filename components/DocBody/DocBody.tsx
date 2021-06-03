import { FC } from 'react'
import { DocContentItem, DocContentItemType } from 'types/content'
import DocContentBuilder from '../DocContentBuilder'
import Holder from './AnchorWrapper'
import styles from './docBody.module.scss'

type Props = {
  content: DocContentItem[]
  onUpdateAnchor?: (id: number, slug?: string) => void
}

const DocBody: FC<Props> = ({ content, onUpdateAnchor }) => {
  return (
    <div className={styles.docBodyWrapper}>
      {content.map(({ id, type, data, params }) => {
        const docElement = (
          <DocContentBuilder key={id} type={type} data={data} params={params} id={id} />
        )
        if (type === DocContentItemType.ANCHOR) {
          return (
            <Holder key={id} id={id} slug={params.anchorHref} onSelect={onUpdateAnchor}>
              {docElement}
            </Holder>
          )
        }
        return docElement
      })}
    </div>
  )
}

export default DocBody
