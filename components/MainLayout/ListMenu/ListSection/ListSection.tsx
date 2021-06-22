import { FC, useState, useCallback } from 'react';

import { NavigationSectionProps } from '../../../NavigationTreeMenu';
import { StyledContent, StyledHeader, StyledIcon } from './ListSection.styles';

export const ListSection: FC<NavigationSectionProps> = ({ link, isRoot, isOpen, children }) => {
  const [opened, setOpened] = useState<boolean>(isOpen ?? false);
  const onToggleHandler = useCallback(() => {
    setOpened(!opened);
  }, [opened]);
  return (
    <div>
      <StyledHeader isRoot={isRoot}>
        <StyledIcon isRotated={opened} onClick={onToggleHandler} />
        {link}
      </StyledHeader>
      <StyledContent isShown={opened}>{children}</StyledContent>
    </div>
  );
};

export default ListSection;
