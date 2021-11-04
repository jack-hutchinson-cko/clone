import React, { FC } from 'react';
import { SelectOptionType, ControlValueType } from '../types';
import { FontPreview, FontName, RadioIcon } from './FrameColorSelector.styles';
import FrameCardSelector from './FrameCardSelector';

type Props = {
  controlValue: ControlValueType;
  onChange: (data: { selectedOption: string; optionValue: string }) => void;
  options: SelectOptionType[];
  code: string;
};

const NameByFontSizeMap = {
  12: 'small',
  14: 'medium',
  16: 'large',
};

const renderCardBody = ({
  selectedOption,
  isSelected,
}: {
  selectedOption: string;
  isSelected: boolean;
}) => (
  <>
    <FontName isSelected={isSelected}>
      {NameByFontSizeMap[selectedOption as '12' | '14' | '16'] || selectedOption}
    </FontName>
    <FontPreview fontSize={selectedOption}>aa</FontPreview>
    <RadioIcon isSelected={isSelected} />
  </>
);

const FrameFontSizeSelector: FC<Props> = (props) => {
  return <FrameCardSelector {...props} renderCardBody={renderCardBody} />;
};

export default FrameFontSizeSelector;
