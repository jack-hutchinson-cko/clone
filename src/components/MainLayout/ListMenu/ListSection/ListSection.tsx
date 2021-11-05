import { FC, useCallback } from 'react';

import { NavigationSectionProps } from 'src/components/NavigationTreeMenu';
import { StyledContent, StyledHeader, StyledIcon, StyledIconWrapper } from './ListSection.styles';

export const ListSection: FC<NavigationSectionProps> = ({
  id,
  link,
  children,
  onToggleOpen,
  isRoot,
  isOpen,
}) => {
  const onToggleHandler = useCallback(() => {
    onToggleOpen?.(id, !isOpen);
  }, [id, isOpen, onToggleOpen]);
  return (
    <div>
      <StyledHeader isRoot={isRoot}>
        <StyledIconWrapper>
          <StyledIcon isRotated={isOpen} onClick={onToggleHandler} />
        </StyledIconWrapper>
        {link}
      </StyledHeader>
      <StyledContent isShown={isOpen}>{children}</StyledContent>
    </div>
  );
};

export default ListSection;
