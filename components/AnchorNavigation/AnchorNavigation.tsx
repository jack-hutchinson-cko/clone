import { get } from 'lodash'
import { FunctionComponent, useState } from 'react'
import { DocContentItem } from 'types/content'
import styles from './anchorNavigation.module.scss'

type Props = {
  anchors: Array<DocContentItem>
}

const AnchorNavigation: FunctionComponent<Props> = ({ anchors }) => {
  const [selectedAnchor, setSelectedAnchor] = useState(get(anchors, '[0].id'))

  return (
    <div>
      <h3>On this page</h3>
      <div>
        {anchors.map(({ id, data, params }) => (
          <div
            className={selectedAnchor === id ? styles.selected : ''}
            key={id}
            onClick={() => setSelectedAnchor(id)}
            role="presentation"
          >
            <a href={`#${params.anchorHref}`}>{data}</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnchorNavigation
