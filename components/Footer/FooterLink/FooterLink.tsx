import { FC, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

import { StyledLink } from './FooterLink.styles';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  underline?: boolean;
  external?: boolean;
}

const FooterLink: FC<Props> = ({
  href,
  children,
  underline = false,
  external = false,
  ...props
}) => {
  const additionalProps = external
    ? {
        target: '_blank',
        rel: 'noreferrer noopener',
      }
    : {};

  return (
    <Link href={href} passHref>
      <StyledLink isUnderlined={underline} {...additionalProps} {...props}>
        {children}
      </StyledLink>
    </Link>
  );
};

export default FooterLink;
