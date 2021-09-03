/* eslint-disable react/no-array-index-key */
import React, { FC, useState, useCallback } from 'react';
import { isEmpty } from 'lodash';
import {
  Pre,
  Line,
  IconArrowAction,
  IconArrowActionContainer,
  PreWrapper,
  LineCounterWrapper,
  LineNumber,
  HorizontalScrollWrapper,
  HightLighter,
} from './CodeSample.styles';
import { PreLineProps } from './type';

export const defaultLengthWithCollapsible = 11;

export const defaultLineHeight = 24;

const getCollapsibleProps = ({
  isCollapsible,
  isOpen,
  tokensLength,
}: {
  isCollapsible: boolean;
  isOpen: boolean;
  tokensLength: number;
}): { showCollapseIcon: boolean; showBlurBackground: boolean; height?: number } => {
  if (!isCollapsible) {
    return { showCollapseIcon: false, showBlurBackground: false };
  }

  const showCollapseIcon = isCollapsible && tokensLength > defaultLengthWithCollapsible;
  const height =
    (!showCollapseIcon || isOpen ? tokensLength : defaultLengthWithCollapsible) * 24 +
    2 * defaultLineHeight;
  const showBlurBackground = showCollapseIcon && !isOpen;

  return { showCollapseIcon, height, showBlurBackground };
};

const PreLine: FC<PreLineProps> = ({
  tokens,
  getLineProps,
  getTokenProps,
  isCollapsible,
  withBorder,
  editorComponent,
  selectedLines = [],
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggleShowLine = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const { showCollapseIcon, height, showBlurBackground } = getCollapsibleProps({
    isCollapsible,
    isOpen,
    tokensLength: tokens.length,
  });

  return (
    <>
      <PreWrapper
        height={height}
        withBorder={withBorder}
        showBlurBackground={showBlurBackground}
        {...rest}
      >
        {isEmpty(selectedLines) ? null : <HightLighter selectedLines={selectedLines} />}
        <LineCounterWrapper>
          {tokens.map((line, i: number) => (
            <LineNumber key={i}>{i + 1}</LineNumber>
          ))}
        </LineCounterWrapper>
        <HorizontalScrollWrapper isBlockScroll={showBlurBackground}>
          <Pre>
            {editorComponent}
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
      {showCollapseIcon ? (
        <IconArrowActionContainer onClick={onToggleShowLine}>
          <IconArrowAction isOpen={isOpen} />
        </IconArrowActionContainer>
      ) : null}
    </>
  );
};

export default PreLine;
