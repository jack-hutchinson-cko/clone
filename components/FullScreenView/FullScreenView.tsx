import { FC, useState, useCallback } from 'react';
import Portal from './ImagePortal';

import {
  Wrapper,
  StyledIconFullScreen,
  ModalRoot,
  ModalContent,
  IconClose,
} from './FullScreenView.styles';

const FullScreenView: FC = ({ children, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = useCallback(
    (e) => {
      if (e.target.tagName !== 'IMG') {
        setIsOpen(!isOpen);
      }
    },
    [isOpen],
  );

  return (
    <Wrapper {...rest}>
      {children}
      {isOpen && (
        <Portal>
          <ModalRoot onClick={onClickHandler}>
            <IconClose />
            <ModalContent>{children}</ModalContent>
          </ModalRoot>
        </Portal>
      )}
      <StyledIconFullScreen
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
    </Wrapper>
  );
};

export default FullScreenView;
