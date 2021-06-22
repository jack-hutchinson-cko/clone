/* eslint-disable react/no-array-index-key */
import React, { FC, useState, useCallback } from 'react';
import { IconActionCopy, IconActionSave } from '@cko/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { Pre, Line, SpanLine, HighlightContainer, CopyIcon } from './CodeSample.styles';

export type Props = {
  code: string;
  language: Language;
};

const CodeSample: FC<Props> = ({ code, language }) => {
  const [isCopied, setIsCopied] = useState(false);

  const onToggleHandler = useCallback(() => {
    setIsCopied(!isCopied);
    const timer = setTimeout(() => setIsCopied(isCopied), 3000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <HighlightContainer>
      <CopyToClipboard text={code} onCopy={() => onToggleHandler()}>
        <CopyIcon>{isCopied ? <IconActionSave /> : <IconActionCopy />}</CopyIcon>
      </CopyToClipboard>
      <Highlight {...defaultProps} code={code} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <Pre>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <SpanLine key={key} {...getTokenProps({ token, key })} />
                ))}
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
    </HighlightContainer>
  );
};

export default CodeSample;
