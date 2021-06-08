import { FC } from 'react';
import { Text } from '@cko/primitives';
import { DocContent } from 'types/content';
import styles from '../docBodyComponents.module.scss';

const DocumentText: FC<DocContent> = ({ data }) => {
  return <Text className={styles.documentText}>{data}</Text>;
};

export default DocumentText;
