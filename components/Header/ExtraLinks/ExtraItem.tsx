import { FC, ReactNode } from 'react';
import Link from 'next/link';

import { Container } from './ExtraItem.styles';

type Props = {
  href?: string;
  title?: ReactNode;
};

export const ExtraItem: FC<Props> = ({ href, title, children }) => {
  const withLink = (child: ReactNode) => {
    if (href) return <Link href={href}>{child}</Link>;
    return child;
  };
  return (
    <Container>
      {title && withLink(title)}
      {children}
    </Container>
  );
};
