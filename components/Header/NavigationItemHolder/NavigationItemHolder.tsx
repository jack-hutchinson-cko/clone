import { FC, ReactNode, useState, useCallback } from 'react';

import { Container, Content, Trigger } from './NavigationItemHolder.styles';

export enum ContentAlign {
  LEFT = 'left',
  RIGHT = 'right',
}

type Props = {
  children: (open: boolean) => ReactNode;
  content: ReactNode;
  offset?: number;
  contentAlign?: ContentAlign;
  isMobile?: boolean;
};

const NavigationItemHolder: FC<Props> = ({
  children,
  content,
  contentAlign = ContentAlign.LEFT,
  offset = 20,
  isMobile,
}) => {
  const [open, setOpen] = useState(false);
  const onClickHandler = useCallback(() => setOpen(!open), [open]);
  const onBlurHandler = useCallback(() => setOpen(false), []);

  return (
    <Container isMobile={isMobile} tabIndex={0} onBlur={onBlurHandler}>
      <Trigger onClick={onClickHandler}>{children(open)}</Trigger>
      <Content align={contentAlign} isMobile={isMobile} offset={offset} isOpen={open}>
        {content}
      </Content>
    </Container>
  );
};

export default NavigationItemHolder;
