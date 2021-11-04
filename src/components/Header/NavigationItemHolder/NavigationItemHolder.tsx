import { FC, ReactNode, useState, useCallback } from 'react';

import Outside from 'src/components/Outside';
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
  withMobileSize?: boolean;
};

const NavigationItemHolder: FC<Props> = ({
  children,
  content,
  contentAlign = ContentAlign.LEFT,
  offset = 20,
  withMobileSize,
}) => {
  const [open, setOpen] = useState(false);
  const onClickHandler = useCallback(() => setOpen(!open), [open]);
  const onClickOutside = useCallback(() => setOpen(false), []);

  return (
    <Outside onOutsideClick={onClickOutside}>
      {(refToElement) => (
        <Container ref={refToElement} withMobileSize={withMobileSize}>
          <Trigger onClick={onClickHandler}>{children(open)}</Trigger>
          <Content
            align={contentAlign}
            withMobileSize={withMobileSize}
            offset={offset}
            isShown={open}
          >
            {content}
          </Content>
        </Container>
      )}
    </Outside>
  );
};

export default NavigationItemHolder;
