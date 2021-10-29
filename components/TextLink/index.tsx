import { FC } from 'react';
import Link from 'next/link';
import { IconActionArrowRight } from 'components/Icons';
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

type ExternalProps = {
  withArrow?: boolean;
};

export const ExternalLink: FC<ExternalProps> = ({ children, withArrow, ...props }) => {
  return (
    <StyledLink {...props} withArrow={withArrow}>
      {children}
      {withArrow && <IconActionArrowRight />}
    </StyledLink>
  );
};

export default TextLink;
