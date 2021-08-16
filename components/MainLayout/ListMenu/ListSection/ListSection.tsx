import { FC, useState, useCallback, useEffect } from 'react';

import { NavigationSectionProps } from 'components/NavigationTreeMenu';
import { StyledContent, StyledHeader, StyledIcon, StyledIconWrapper } from './ListSection.styles';

export const ListSection: FC<NavigationSectionProps> = ({
  link,
  children,
  isRoot = false,
  isOpen = false,
}) => {
  const [open, setOpen] = useState<boolean>(isOpen);
  const onToggleHandler = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    if (isOpen) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  return (
    <div>
      <StyledHeader isRoot={isRoot}>
        <StyledIconWrapper>
          <StyledIcon isRotated={open} onClick={onToggleHandler} />
        </StyledIconWrapper>
        {link}
      </StyledHeader>
      <StyledContent isShown={open}>{children}</StyledContent>
    </div>
  );
};

export default ListSection;
