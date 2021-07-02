import { FC } from 'react';
import { Button, StyledLink } from './ButtonLinkStyles';

export type Props = {
  href: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const ButtonLink: FC<Props> = ({ children, href, onClick }) => {
  return (
    <StyledLink href={href}>
      <Button onClick={onClick}>{children}</Button>
    </StyledLink>
  );
};

export default ButtonLink;
