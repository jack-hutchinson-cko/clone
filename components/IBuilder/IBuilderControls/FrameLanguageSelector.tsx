import React, { FC } from 'react';
import { get } from 'lodash';
import { useSelect } from 'hooks/useSelect';
import { SelectOptionType, ControlValueType } from '../types';
import { getOptionValue } from '../utils';
import { Wrapper, DropDownHeader, DropDownBody, DropDownOption } from './FrameColorSelector.styles';

type Props = {
  controlValue: ControlValueType;
  onChange: (data: { selectedOption: string; optionValue: string }) => void;
  options: SelectOptionType[];
  code: string;
};

const nameByTypeMap = {
  'EN-GB': 'English',
  'NL-NL': 'Dutch',
  'FR-FR': 'French',
  'DE-DE': 'German',
  'IT-IT': 'Italian',
  'KO-KR': 'Korean',
  'ES-ES': 'Spanish',
};

const FrameLanguageSelector: FC<Props> = ({ options, onChange, code, controlValue }) => {
  const { isOpen, handelOpenClose, headerRef } = useSelect();

  return (
    <Wrapper>
      <DropDownHeader onClick={handelOpenClose} ref={headerRef}>
        {get(nameByTypeMap, controlValue.selectedOption, controlValue.selectedOption)}
        {isOpen ? (
          <DropDownBody>
            {options.map((optionItem) => {
              const { selectedOption, optionValue } = getOptionValue({ optionItem, code });
              const isSelected = selectedOption === controlValue.selectedOption;

              return (
                <DropDownOption
                  isSelected={isSelected}
                  key={selectedOption}
                  onClick={() => {
                    onChange({ selectedOption, optionValue });
                  }}
                  color={selectedOption}
                >
                  {get(nameByTypeMap, selectedOption, selectedOption)}
                </DropDownOption>
              );
            })}
          </DropDownBody>
        ) : null}
      </DropDownHeader>
    </Wrapper>
  );
};

export default FrameLanguageSelector;
