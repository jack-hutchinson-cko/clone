/* eslint-disable react/no-array-index-key */
import React, { FC, useState, useCallback, useMemo } from 'react';
import { get } from 'lodash';
import {
  Pre,
  Line,
  IconArrowAction,
  LineNo,
  IconArrowActionContainer,
  PreWrapper,
} from './CodeSample.styles';
import { PreLineProps } from './type';

const defaultLengthWithCollapsible = 11;

const PreLine: FC<PreLineProps> = ({
  tokens,
  getLineProps,
  getTokenProps,
  isCollapsible,
  withBorder,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggleShowLine = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const resultTokens = useMemo(() => {
    const isLastEmpty = get(tokens, `[${tokens.length - 1}][0].empty`);
    return isLastEmpty ? tokens.slice(0, tokens.length - 1) : tokens;
  }, [tokens]);

  const showCollapseIcon = isCollapsible && resultTokens.length > defaultLengthWithCollapsible;
  const height =
    (!showCollapseIcon || isOpen ? resultTokens.length : defaultLengthWithCollapsible) * 24;
  const showBlurBackground = showCollapseIcon && !isOpen;

  return (
    <>
      <PreWrapper withBorder={withBorder} showBlurBackground={showBlurBackground}>
        <Pre height={height} showBlurBackground={showBlurBackground}>
          {resultTokens.map((line, i: number) => {
            return (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </Line>
            );
          })}
        </Pre>
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
