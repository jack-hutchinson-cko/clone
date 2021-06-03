import { FC } from 'react'
import { Text } from '@cko/primitives'
import { DocContentItem } from 'types/content'
import styles from './docBodyComponents.module.scss'

type Props = Omit<DocContentItem, 'type'>

const DocumentText: FC<Props> = ({ data }) => {
  return <Text className={styles.documentText}>{data}</Text>
}

export default DocumentText
