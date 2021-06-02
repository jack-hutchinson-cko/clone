import { FC, CSSProperties } from 'react'
import cn from 'classnames'
import styles from './Icons.module.scss'

type Props = {
  className?: string
  style?: CSSProperties
}

export const IconArrowDown: FC<Props> = ({ className, ...rest }) => (
  <svg className={cn(styles.icon, styles.iconArrowDown, className)} {...rest}>
    <path
      d="M2.5 4.5l3.5 3 3.5-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
