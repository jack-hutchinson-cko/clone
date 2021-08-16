/* eslint-disable react/no-array-index-key */
import React, { FC, useState, useCallback } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Highlight, { defaultProps } from 'prism-react-renderer';

import { IconActionCopy, IconActionLink } from 'components/Icons';
import { HighlightContainer, StyledIcons, StyledText, StyledIconLink } from './CodeSample.styles';
import { CodeSampleProps } from './type';
import PreLine from './PreLine';
import TextArea from './TextArea';

const timeout = 3000;

const CodeSample: FC<CodeSampleProps> = ({
  code,
  language,
  isCollapsible = true,
  withBorder = true,
  isEditMode,
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

  return (
    <HighlightContainer {...rest}>
      <StyledIconLink>
        <IconActionLink />
      </StyledIconLink>
      <CopyToClipboard text={soursCode} onCopy={() => onToggleHandler()}>
        <StyledIcons>
          {isCopied ? <IconActionCopy /> : <StyledText>Copied!</StyledText>}
        </StyledIcons>
      </CopyToClipboard>
      <Highlight {...defaultProps} code={soursCode} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <PreLine
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
