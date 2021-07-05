/* eslint-disable react/no-array-index-key */
import React, { FC, useState, useCallback, useMemo } from 'react';
import { Pre, Line, IconArrowAction, LineNo, IconArrowActionContainer } from './CodeSample.styles';
import { PreLineProps } from './type';

const defaultLengthWithCollapsible = 7;

const PreLine: FC<PreLineProps> = ({
  tokens,
  getLineProps,
  getTokenProps,
  isCollapsible,
  withBorder,
}) => {
  const [lineToShow, setLineToShow] = useState<number>(
    isCollapsible ? defaultLengthWithCollapsible : tokens.length,
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onToggleShowLine = useCallback(() => {
    setLineToShow(isOpen ? defaultLengthWithCollapsible : tokens.length);
    setIsOpen(!isOpen);
  }, [isOpen, tokens.length]);

  const checkLengthWithCollabsible = defaultLengthWithCollapsible < tokens.length;

  const isShowIconArrowAction = checkLengthWithCollabsible && (
    <IconArrowActionContainer onClick={onToggleShowLine}>
      <IconArrowAction isOpen={isOpen} />
    </IconArrowActionContainer>
  );

  const resultTokens = useMemo(() => {
    const toketLength =
      tokens[lineToShow - 1] && tokens[lineToShow - 1][0].empty ? lineToShow - 1 : lineToShow;
    return tokens.slice(0, toketLength);
  }, [lineToShow, tokens]);

  return (
    <>
      <Pre
        lineToShow={lineToShow}
        isOpen={isOpen}
        isCollapsible={isCollapsible}
        checkLengthWithCollabsible={checkLengthWithCollabsible}
        withBorder={withBorder}
      >
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
      {isCollapsible && isShowIconArrowAction}
    </>
  );
};

export default PreLine;
