import React, { FC, useState } from 'react';
import Head from 'next/head';

import { IconActionAccordion } from 'components/Icons';
import { Wrapper, Header, Body, Preview, IconContainer } from './IBuilderPreview.styles';

const SCRIPT_FRAMEV2_URL = 'https://cdn.checkout.com/js/framesv2.min.js';

const IBuilderPreview: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Head>
        <script src={SCRIPT_FRAMEV2_URL} />
      </Head>
      <Wrapper>
        <Header onClick={handelClick}>
          <IconContainer isOpen={isOpen}>
            <IconActionAccordion width={12} height={6} />
          </IconContainer>
          <Preview>Preview</Preview>
        </Header>
        {isOpen && <Body>{children}</Body>}
      </Wrapper>
    </>
  );
};

export default IBuilderPreview;
