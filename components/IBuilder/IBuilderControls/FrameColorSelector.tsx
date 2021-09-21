import React, { FC } from 'react';
import { SelectOptionType, ControlValueType } from '../types';
import { InputContainer, InputIcon, ButtonIcon, RadioIcon } from './FrameColorSelector.styles';
import FrameCardSelector from './FrameCardSelector';

type Props = {
  controlValue: ControlValueType;
  onChange: (data: { selectedOption: string; optionValue: string }) => void;
  options: SelectOptionType[];
  code: string;
};

const renderCardBody = ({
  selectedOption,
  isSelected,
}: {
  selectedOption: string;
  isSelected: boolean;
}) => (
  <>
    <InputContainer>
      <InputIcon />
    </InputContainer>
    <InputContainer>
      <InputIcon isSmall />
      <InputIcon isSmall />
    </InputContainer>
    <ButtonIcon color={selectedOption} />
    <RadioIcon isSelected={isSelected} />
  </>
);

const FrameColorSelector: FC<Props> = (props) => {
  return <FrameCardSelector {...props} renderCardBody={renderCardBody} />;
};

export default FrameColorSelector;
