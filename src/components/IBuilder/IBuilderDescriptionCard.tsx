import React, { FC, useEffect, useRef, useContext } from 'react';
import { get } from 'lodash';
import { CodeHandler } from './IBuilderFrameworkTab';
import { SelectedBlockType, RegisterDescriptionElementType } from './types';
import { MainWrapper, TextHeadFour, HighlightLinesWrapper } from './IBuilderDescriptionCard.styles';
import { getChildComponentName, getChildWithProps, getSelectedLines } from './utils';
import { HEADER_HEIGHT } from './constants';

type Props = {
  title: string;
  tab: string;
  lines: number[];
  selectedBlock: SelectedBlockType;
  setSelectedBlock: (param: SelectedBlockType) => void;
  registerDescriptionElement: (param: RegisterDescriptionElementType) => void;
  id: number;
};

type HightLightedLinesProps = {
  isSelected: boolean;
  tab: string;
  lines: number[];
  selectedBlock: SelectedBlockType;
};

const HightLightedLines: FC<HightLightedLinesProps> = ({
  isSelected,
  tab,
  lines,
  selectedBlock,
}) => {
  const { codeControlState } = useContext(CodeHandler);

  if (!isSelected || !lines) {
    return null;
  }

  const resultLines = getSelectedLines({ selectedBlock, codeTitle: tab, codeControlState });

  return (
    <HighlightLinesWrapper>
      Lines {resultLines[0]} – {resultLines[1]}
    </HighlightLinesWrapper>
  );
};

const IBuilderDescriptionCard: FC<Props> = ({
  children,
  title,
  tab,
  lines,
  selectedBlock,
  setSelectedBlock,
  registerDescriptionElement,
  id,
}) => {
  const blockItemRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    setSelectedBlock({ lines, tab, id });
    if (blockItemRef.current) {
      const { top, height } = blockItemRef.current.getBoundingClientRect();
      if (top < HEADER_HEIGHT || top + height > window.innerHeight) {
        window.scrollTo(0, top + window.scrollY - HEADER_HEIGHT);
      }
    }
  };

  useEffect(() => {
    registerDescriptionElement({ blockItem: { lines, tab, id }, blockItemRef });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isSelected = id === selectedBlock.id;

  return (
    <MainWrapper ref={blockItemRef} isSelected={isSelected} onClick={handleClick}>
      <HightLightedLines
        isSelected={isSelected}
        tab={tab}
        lines={lines}
        selectedBlock={selectedBlock}
      />
      <TextHeadFour>{title}</TextHeadFour>
      {React.Children.toArray(children).map((child) => {
        const componentName = getChildComponentName(child);

        if (componentName === 'IBuilderCodeControl') {
          const controlTab = get(child, 'props.tab', tab);
          const controlLines = get(child, 'props.lines', lines);

          return getChildWithProps(child, { tab: controlTab, lines: controlLines });
        }

        return child;
      })}
    </MainWrapper>
  );
};

IBuilderDescriptionCard.displayName = 'IBuilderDescriptionCard';

export default IBuilderDescriptionCard;
