import { FC } from 'react'
import { DocContentItem } from 'types/content'
import DocContentBuilder from '../DocContentBuilder'
import styles from './docBody.module.scss'

type Props = {
  content: Array<DocContentItem>
}

const DocBody: FC<Props> = ({ content }) => (
  <div className={styles.docBodyWrapper}>
    {content.map(({ type, data, params, id }) => (
      <DocContentBuilder key={id} type={type} data={data} params={params} id={id} />
    ))}
  </div>
)

export default DocBody
