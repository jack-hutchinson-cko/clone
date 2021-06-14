import { FC, useState, useCallback, ReactNode } from 'react';

import { StyledContent, StyledHeader, StyledIcon } from './ListSection.styles';

type Props = {
  link: ReactNode;
  isRoot?: boolean;
};

export const ListSection: FC<Props> = ({ link, isRoot, children }) => {
  const [opened, setOpened] = useState<boolean>(false);
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
