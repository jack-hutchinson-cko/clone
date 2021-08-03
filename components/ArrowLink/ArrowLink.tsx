import { FC } from 'react';
import Link from 'next/link';
import { IconActionArrowRight } from 'components/Icons';
import { BlockLink } from './ArrowLink.styles';

type Props = {
  href: string;
  title: string;
};

const ArrowLink: FC<Props> = ({ href, title }) => (
  <Link href={href}>
    <BlockLink>
      {title}
      <IconActionArrowRight />
    </BlockLink>
  </Link>
);

export default ArrowLink;
