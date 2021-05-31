import { FunctionComponent } from 'react'
import DocContentBuilder from '../DocContentBuilder'
import { DocContentItem } from '../../types/content'

type Props = {
  content: Array<DocContentItem>
}

const DocBody: FunctionComponent<Props> = ({ content }) => (
  <article>
    {content.map(({ type, data, params, id }) => (
      <DocContentBuilder key={id} type={type} data={data} params={params} id={id} />
    ))}
  </article>
)

export default DocBody
