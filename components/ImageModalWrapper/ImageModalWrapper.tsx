import React, { FC, useState } from 'react';
import Modal from 'components/ModalComponents';

import { ContentWrapper, StyledIconFullScreen, StyledImage } from './ImageModalWrapper.styles';

export type Props = {
  src: string;
};

const ImageModalWrapper: FC<Props> = ({ children, src, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ContentWrapper onClick={onClickHandler} {...rest}>
        {children}
        <StyledIconFullScreen />
      </ContentWrapper>
      <Modal isOpen={isOpen} onClose={onClickHandler}>
        <StyledImage src={src} />
      </Modal>
    </>
  );
};

export default ImageModalWrapper;
