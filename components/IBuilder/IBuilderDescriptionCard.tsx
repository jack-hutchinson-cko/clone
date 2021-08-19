import { FC, useEffect, useRef } from 'react';
import { TextHeadingFour } from 'components/TextHeading';
import { SelectedBlockType, RegisterDescriptionElementType } from './types';
import { MainWrapper } from './IBuilderDescriptionCard.styles';

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
  const handelClick = () => {
    setSelectedBlock({ lines, tab, id });
  };

  useEffect(() => {
    registerDescriptionElement({ blockItem: { lines, tab, id }, blockItemRef });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isSelected = id === selectedBlock.id;

  return (
    <MainWrapper ref={blockItemRef} isSelected={isSelected} onClick={handelClick}>
      <TextHeadingFour>{title}</TextHeadingFour>
      {children}
    </MainWrapper>
  );
};

IBuilderDescriptionCard.displayName = 'IBuilderDescriptionCard';

export default IBuilderDescriptionCard;
