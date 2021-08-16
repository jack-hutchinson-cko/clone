import { FC } from 'react';
import { isEqual } from 'lodash';
import { TextHeadingFour } from 'components/TextHeading';
import { SelectedBlockType } from './types';
import { MainWrapper } from './IBuilderDescriptionCard.styles';

type Props = {
  title: string;
  tab: string;
  lines: number[];
  selectedBlock: SelectedBlockType;
  setSelectedBlock: (param: SelectedBlockType) => void;
};

const IBuilderDescriptionCard: FC<Props> = ({
  children,
  title,
  tab,
  lines,
  selectedBlock,
  setSelectedBlock,
}) => {
  const handelClick = () => {
    setSelectedBlock({ lines, tab });
  };

  const isSelected = tab === selectedBlock.tab && isEqual(selectedBlock.lines, lines);

  return (
    <MainWrapper isSelected={isSelected} onClick={handelClick}>
      <TextHeadingFour>{title}</TextHeadingFour>
      {children}
    </MainWrapper>
  );
};

IBuilderDescriptionCard.displayName = 'IBuilderDescriptionCard';

export default IBuilderDescriptionCard;
