/* eslint-disable react/no-array-index-key */
import React, { FC, useState, useCallback } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { IconActionCopy } from '../Icons/Icons';
import { HighlightContainer, StyledIcons, StyledText } from './CodeSample.styles';
import { CodeSampleProps } from './type';
import PreLine from './PreLine';

const timeout = 3000;

const CodeSample: FC<CodeSampleProps> = ({
  code,
  language,
  isCollapsible = false,
  withBorder = true,
}) => {
  const [isCopied, setIsCopied] = useState(true);

  const onToggleHandler = useCallback(() => {
    setIsCopied(!isCopied);
    const timer = setTimeout(() => setIsCopied(isCopied), timeout);
    return () => clearTimeout(timer);
  }, [isCopied]);

  const onHandlerCopy = (
    <StyledIcons>{isCopied ? <IconActionCopy /> : <StyledText>Copied!</StyledText>}</StyledIcons>
  );

  return (
    <HighlightContainer>
      <CopyToClipboard text={code} onCopy={() => onToggleHandler()}>
        {onHandlerCopy}
      </CopyToClipboard>
      <Highlight {...defaultProps} code={code} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <PreLine
            tokens={tokens}
            getLineProps={getLineProps}
            getTokenProps={getTokenProps}
            isCollapsible={isCollapsible}
            withBorder={withBorder}
          />
        )}
      </Highlight>
    </HighlightContainer>
  );
};

export default CodeSample;
