import React, { FC, useState } from 'react';

import { IconActionAccordion } from 'src/components/Icons';
import { Wrapper, Header, Body, Preview, IconContainer } from './IBuilderPreview.styles';

const IBuilderPreview: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <Header onClick={handelClick}>
          <IconContainer isOpen={isOpen}>
            <IconActionAccordion width={14} height={8} />
          </IconContainer>
          <Preview>Preview</Preview>
        </Header>
        {isOpen && <Body>{children}</Body>}
      </Wrapper>
    </>
  );
};

export default IBuilderPreview;
