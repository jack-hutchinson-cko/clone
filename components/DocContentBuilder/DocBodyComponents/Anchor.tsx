import { FunctionComponent } from 'react'
import { DocContentItem } from '../../../types/content'

type Props = Omit<DocContentItem, 'type'>

const Anchor: FunctionComponent<Props> = ({ data, params: { anchorHref } }) => (
  <h3>
    <a name={anchorHref} href={`#${anchorHref}`}>
      {data}
    </a>
  </h3>
)

export default Anchor
