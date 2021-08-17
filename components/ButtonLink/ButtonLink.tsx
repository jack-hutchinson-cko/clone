import { FC, ReactNode } from 'react';
import { Button, StyledLink } from './ButtonLink.styles';

export type Props = {
  href: string;
  children?: ReactNode;
  onClick?: () => void;
};

const ButtonLink: FC<Props> = ({ children, href, onClick, ...rest }) => {
  return (
    <StyledLink href={href} passHref>
      <Button onClick={onClick} {...rest}>
        {children}
      </Button>
    </StyledLink>
  );
};

export default ButtonLink;
