import React, { FC, ReactNode } from 'react';
import { SelectOptionType, ControlValueType } from '../types';
import { getOptionValue } from '../utils';
import { ControlColorItem, ControlWrapper } from './FrameColorSelector.styles';

type Props = {
  controlValue: ControlValueType;
  onChange: (data: { selectedOption: string; optionValue: string }) => void;
  options: SelectOptionType[];
  code: string;
  renderCardBody: (params: { selectedOption: string; isSelected: boolean }) => ReactNode;
};

const FrameCardSelector: FC<Props> = ({
  controlValue,
  onChange,
  options,
  code,
  renderCardBody,
}) => {
  return (
    <ControlWrapper>
      {options.map((optionItem) => {
        const { selectedOption, optionValue } = getOptionValue({ optionItem, code });
        const isSelected = selectedOption === controlValue.selectedOption;

        return (
          <ControlColorItem
            isSelected={isSelected}
            key={selectedOption}
            onClick={() => {
              onChange({ selectedOption, optionValue });
            }}
            color={selectedOption}
          >
            {renderCardBody({ selectedOption, isSelected })}
          </ControlColorItem>
        );
      })}
    </ControlWrapper>
  );
};

export default FrameCardSelector;
