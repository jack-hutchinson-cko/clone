import React, { FC } from 'react';
import Portal from './Portal';

import { ModalRoot, ContentWrapper, IconClose } from './Modal.styles';

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

const Modal: FC<Props> = ({ children, onClose, isOpen }) => {
  return isOpen ? (
    <Portal>
      <ModalRoot onClick={onClose}>
        <IconClose />
        <ContentWrapper
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </ContentWrapper>
      </ModalRoot>
    </Portal>
  ) : null;
};

export default Modal;
