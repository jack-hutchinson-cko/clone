import { FC, useState } from 'react';
import { IconActionAccordion } from 'components/Icons';
import { Wrapper, Header, Body, IconContainer } from './IBuilderCodePreview.styles';

const IBuilderCodePreview: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Header onClick={handelClick}>
        <IconContainer isOpen={isOpen}>
          <IconActionAccordion width={12} height={6} />
        </IconContainer>
        <span>Preview</span>
      </Header>
      {isOpen ? <Body>{children}</Body> : null}
    </Wrapper>
  );
};

IBuilderCodePreview.displayName = 'IBuilderCodePreview';

export default IBuilderCodePreview;
