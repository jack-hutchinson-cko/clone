import React, { FC, ReactNode, useState } from 'react';
import Toggle from 'src/components/Toggle';
import { SelectOptionType, ControlValueType } from '../types';
import { getOptionValue } from '../utils';
import { ControlColorItem, ControlWrapper } from './FrameColorSelector.styles';

type Props = {
  controlValue: ControlValueType;
  onChange: (data: { selectedOption: string; optionValue: string }) => void;
  options: SelectOptionType[];
  code: string;
  renderCardBody: (params: { selectedOption: string; isSelected: boolean }) => ReactNode;
  withCustomValue?: boolean;
  id?: string;
  CustomControlComponent?: FC<{ onChange: (value: string) => void; value: string }>;
};

const FrameCardSelector: FC<Props> = ({
  controlValue,
  onChange,
  options,
  code,
  renderCardBody,
  withCustomValue,
  id = '',
  CustomControlComponent,
}) => {
  const [isCustomOption, setIsCustomOption] = useState(false);

  return (
    <ControlWrapper>
      {options.map((optionItem) => {
        const { selectedOption, optionValue } = getOptionValue({ optionItem, code });
        const isSelected = !isCustomOption && selectedOption === controlValue.selectedOption;

        return (
          <ControlColorItem
            isSelected={isSelected}
            key={selectedOption}
            onClick={() => {
              onChange({ selectedOption, optionValue });
              setIsCustomOption(false);
            }}
            color={selectedOption}
          >
            {renderCardBody({ selectedOption, isSelected })}
          </ControlColorItem>
        );
      })}
      {withCustomValue && CustomControlComponent ? (
        <Toggle
          checked={isCustomOption}
          onChangeHandler={() => {
            setIsCustomOption(!isCustomOption);
          }}
          id={id}
        />
      ) : null}
      {isCustomOption && CustomControlComponent ? (
        <CustomControlComponent
          onChange={(value) => {
            const { selectedOption, optionValue } = getOptionValue({
              optionItem: { option: value, codeVariables: [value] },
              code,
            });
            onChange({ selectedOption, optionValue });
          }}
          value={controlValue.selectedOption}
        />
      ) : null}
    </ControlWrapper>
  );
};

export default FrameCardSelector;
