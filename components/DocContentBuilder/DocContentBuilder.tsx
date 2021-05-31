import { FunctionComponent } from 'react'
import Anchor from './DocBodyComponents/Anchor'
import Text from './DocBodyComponents/Text'
import { DocContentItem } from '../../types/content'

const ComponentMap = {
  TEXT: Text,
  ANCHOR: Anchor,
}

const DocContentBuilder: FunctionComponent<DocContentItem> = ({ data, params, type, id }) => {
  const Component = ComponentMap[type]

  if (!Component) {
    return null
  }

  return <Component data={data} params={params} id={id} />
}

export default DocContentBuilder
