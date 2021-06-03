import { FC } from 'react'
import { DocContentItem } from 'types/content'
import Anchor from './DocBodyComponents/Anchor'
import Text from './DocBodyComponents/Text'

const ComponentMap = {
  TEXT: Text,
  ANCHOR: Anchor,
}

const DocContentBuilder: FC<DocContentItem> = ({ data, params, type, id }) => {
  const Component = ComponentMap[type]

  if (!Component) {
    return null
  }

  return <Component data={data} params={params} id={id} />
}

export default DocContentBuilder
