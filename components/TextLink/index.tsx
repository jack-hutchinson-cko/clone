import { FC } from 'react';
import Link from 'next/link';
import { StyledLink } from './TextLink.styles';

type Props = {
  href: string;
};

const TextLink: FC<Props> = ({ href, ...otherProps }) => (
  <Link href={href}>
    <StyledLink href={href} {...otherProps} />
  </Link>
);

export default TextLink;
