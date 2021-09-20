import { FC, useEffect, useRef } from 'react';
import { SelectedBlockType, RegisterDescriptionElementType } from './types';
import { MainWrapper, TextHeadFour, HighlightLinesWrapper } from './IBuilderDescriptionCard.styles';

type Props = {
  title: string;
  tab: string;
  lines: number[];
  selectedBlock: SelectedBlockType;
  setSelectedBlock: (param: SelectedBlockType) => void;
  registerDescriptionElement: (param: RegisterDescriptionElementType) => void;
  id: number;
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
  const blockItemRef = useRef(null);
  const handleClick = () => {
    setSelectedBlock({ lines, tab, id });
  };

  useEffect(() => {
    registerDescriptionElement({ blockItem: { lines, tab, id }, blockItemRef });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isSelected = id === selectedBlock.id;

  const highlightedLines =
    isSelected && lines ? (
      <HighlightLinesWrapper>
        Lines {lines[0]} – {lines[1]}
      </HighlightLinesWrapper>
    ) : null;

  return (
    <MainWrapper ref={blockItemRef} isSelected={isSelected} onClick={handleClick}>
      {highlightedLines}
      <TextHeadFour>{title}</TextHeadFour>
      {children}
    </MainWrapper>
  );
};

IBuilderDescriptionCard.displayName = 'IBuilderDescriptionCard';

export default IBuilderDescriptionCard;
