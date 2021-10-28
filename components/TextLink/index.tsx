import { FC } from 'react';
import Link from 'next/link';
import { basePathAddition } from 'tools/basePathAddition';
import { StyledLink } from './TextLink.styles';

type Props = {
  href: string;
};

const TextLink: FC<Props> = ({ href, ...otherProps }) => {
  const src = basePathAddition(href);
  return (
    <Link href={href}>
      <StyledLink href={src} {...otherProps} />
    </Link>
  );
};

export const ExternalLink: FC<Props> = (props) => <StyledLink {...props} />;

export default TextLink;
