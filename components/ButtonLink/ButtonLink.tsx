import { FC } from 'react';
import { Button, StyledLink } from './ButtonLinkStyles';

export type Props = {
  href: string;
  children?: React.ReactNode;
};

const ButtonLink: FC<Props> = ({ children, href }) => {
  return (
    <StyledLink href={href}>
      <Button>{children}</Button>
    </StyledLink>
  );
};

export default ButtonLink;
