import { FC, useMemo } from 'react'
import { DocContentItem } from 'types/content'
import DocContentBuilder from '../DocContentBuilder'
import styles from './docBody.module.scss'

type Props = {
  content: DocContentItem[]
  onUpdateAnchor?: (id: number, slug?: string) => void
}

const DocBody: FC<Props> = ({ content, onUpdateAnchor }) => {
  const extraProps = useMemo(() => ({ onUpdateAnchor }), [onUpdateAnchor])

  return (
    <div className={styles.docBodyWrapper}>
      {content.map(({ id, type, data, params }) => (
        <DocContentBuilder
          key={id}
          type={type}
          data={data}
          params={params}
          id={id}
          {...extraProps}
        />
      ))}
    </div>
  )
}

export default DocBody
