import { FunctionComponent } from 'react'
import { DocContentItem } from 'types/content'

type Props = Omit<DocContentItem, 'type'>

const FooterComponent: FunctionComponent<Props> = ({ data }) => <p>{data}</p>

export default FooterComponent
