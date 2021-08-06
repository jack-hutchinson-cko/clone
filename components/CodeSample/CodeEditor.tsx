/* eslint-disable react/no-array-index-key */
import React, { FC, useState, useCallback, useRef, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { IconActionCopy, IconActionLink } from '../Icons/Icons';
import {
  HighlightContainer,
  StyledIcons,
  StyledText,
  StyledIconLink,
  Pre,
  Line,
  PreWrapper,
  HorizontalScrollWrapper,
  LineCounterWrapper,
  LineNumber,
} from './CodeSample.styles';
import TextArea from './TextArea';
import { CodeSampleProps } from './type';

const timeout = 3000;

const CodeSample: FC<CodeSampleProps> = ({ code, language, withBorder }) => {
  const [isCopied, setIsCopied] = useState(true);
  const [soursCode, setSoursCode] = useState(code);

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
      <StyledIconLink>
        <IconActionLink />
      </StyledIconLink>
      <CopyToClipboard text={soursCode} onCopy={() => onToggleHandler()}>
        {onHandlerCopy}
      </CopyToClipboard>
      <Highlight {...defaultProps} code={soursCode} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <PreWrapper withBorder={withBorder}>
            <LineCounterWrapper>
              {tokens.map((line, i: number) => (
                <LineNumber key={i}>{i + 1}</LineNumber>
              ))}
            </LineCounterWrapper>
            <HorizontalScrollWrapper>
              <Pre>
                <TextArea value={soursCode} onChange={setSoursCode} />
                {tokens.map((line, i: number) => {
                  return (
                    <Line key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </Line>
                  );
                })}
              </Pre>
            </HorizontalScrollWrapper>
          </PreWrapper>
        )}
      </Highlight>
    </HighlightContainer>
  );
};

CodeSample.defaultProps = {
  withBorder: true,
};

export default CodeSample;
