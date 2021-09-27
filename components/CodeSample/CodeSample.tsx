/* eslint-disable react/no-array-index-key */
import React, { FC, useState, useCallback, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Highlight, { defaultProps } from 'prism-react-renderer';

import { IconActionCopy, IconActionLink } from 'components/Icons';
import { HighlightContainer, StyledIcons, StyledText } from './CodeSample.styles';
import { CodeSampleProps } from './type';
import PreLine from './PreLine';
import TextArea from './TextArea';

const timeout = 3000;

const CodeSample: FC<CodeSampleProps> = ({
  code,
  language,
  isCollapsible = true,
  withBorder = true,
  withControls = true,
  isEditMode,
  selectedLines = [],
  ...rest
}) => {
  const [isCopied, setIsCopied] = useState(true);
  const [soursCode, setSoursCode] = useState(code);

  const onToggleHandler = useCallback(() => {
    setIsCopied(!isCopied);
    const timer = setTimeout(() => setIsCopied(isCopied), timeout);
    return () => clearTimeout(timer);
  }, [isCopied]);

  const editorComponent = isEditMode ? (
    <TextArea value={soursCode} onChange={setSoursCode} />
  ) : null;

  useEffect(() => {
    setSoursCode(code);
  }, [code]);

  return (
    <HighlightContainer {...rest}>
      {withControls && (
        <StyledIcons>
          <IconActionLink />
          <CopyToClipboard text={soursCode} onCopy={() => onToggleHandler()}>
            {isCopied ? <IconActionCopy /> : <StyledText>Copied!</StyledText>}
          </CopyToClipboard>
        </StyledIcons>
      )}
      <Highlight {...defaultProps} code={soursCode} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <PreLine
            selectedLines={selectedLines}
            isEditMode={isEditMode}
            tokens={tokens}
            getLineProps={getLineProps}
            getTokenProps={getTokenProps}
            isCollapsible={isCollapsible}
            withBorder={withBorder}
            editorComponent={editorComponent}
          />
        )}
      </Highlight>
    </HighlightContainer>
  );
};

export default CodeSample;
