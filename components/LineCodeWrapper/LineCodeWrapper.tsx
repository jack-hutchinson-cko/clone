import { FC, useRef, useState, useCallback } from 'react';
import { RequestTag } from '../Tag';
import { RequestTagProps } from '../Tag/types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  StyledLineCodeWrapper,
  Wrapper,
  IconsContainer,
  StyledIconActionCopy,
} from './LineCodeWrapper.styles';

const timeout = 3000;

const LineCodeWrapper: FC<RequestTagProps> = ({ type, children, ...props }) => {
  const [textValue, setTextValue] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const onClickHandler = useCallback(() => {
    const tempText = ref.current?.innerText ?? '';
    const text = tempText?.replace(/[A-Z]/g, '');
    setTextValue(text);
    setIsCopied(!isCopied);
    const timer = setTimeout(() => setIsCopied(isCopied), timeout);
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <Wrapper>
      <StyledLineCodeWrapper ref={ref} {...props}>
        <div>
          <RequestTag type={type} />
        </div>
        {children}
      </StyledLineCodeWrapper>
      <CopyToClipboard text={textValue} onCopy={onClickHandler}>
        <IconsContainer>{isCopied ? 'Copied!' : <StyledIconActionCopy />}</IconsContainer>
      </CopyToClipboard>
    </Wrapper>
  );
};

export default LineCodeWrapper;
