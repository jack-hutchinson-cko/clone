import { FC, useCallback } from 'react';
import Link from 'next/link';

import { withMenuState, WithMenuStateProps } from 'components/MenuStateProvider';
import { NavigationLinkProps } from 'components/NavigationTreeMenu';
import { StyledLink } from './ListItem.styles';

const ListItemLink: FC<WithMenuStateProps<NavigationLinkProps>> = ({
  children,
  href,
  isActive,
  onChangeMenuState,
}) => {
  const onClickHandler = useCallback(() => onChangeMenuState(false), [onChangeMenuState]);
  return (
    <Link href={href} passHref>
      <StyledLink isActive={isActive} onClick={onClickHandler}>
        <mark>{children}</mark>
      </StyledLink>
    </Link>
  );
};

export default withMenuState(ListItemLink) as FC<NavigationLinkProps>;
