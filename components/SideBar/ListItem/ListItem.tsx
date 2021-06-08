import { FC, ReactNode } from 'react';
import cn from 'classnames';

import styles from './ListItem.module.scss';

type Props = {
  link: ReactNode;
  isRoot: boolean;
};

const ListItem: FC<Props> = ({ link, isRoot }) => (
  <div className={cn(styles.listItem, { [styles.large]: isRoot })}>{link}</div>
);

export default ListItem;
