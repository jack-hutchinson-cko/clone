import { FC } from 'react';

import Button from 'src/components/Button';
import { StyledLink } from './ButtonLink.styles';

export type Props = {
  href: string;
};

const ButtonLink: FC<Props> = ({ children, href, ...rest }) => {
  return (
    <StyledLink href={href} passHref>
      <Button as="a" variant="primary" size="large" {...rest}>
        {children}
      </Button>
    </StyledLink>
  );
};

export default ButtonLink;
