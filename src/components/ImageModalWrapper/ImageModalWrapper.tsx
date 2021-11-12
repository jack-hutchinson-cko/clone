import React, { FC, useState } from 'react';
import { ImageLoader, ImageProps } from 'next/image';
import Modal from 'src/components/ModalComponents';

import { generateAltAttribute } from 'src/lib/generateAltAttribute';
import { ContentWrapper, StyledIconFullScreen, StyledImage } from './ImageModalWrapper.styles';

export interface Props extends ImageProps {
  loader?: ImageLoader;
}

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
        <StyledImage src={src} alt={generateAltAttribute(String(src))} {...rest} />
      </Modal>
    </>
  );
};

ImageModalWrapper.defaultProps = {
  layout: 'fill',
};

export default ImageModalWrapper;
