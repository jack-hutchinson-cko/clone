import React, { FC } from 'react';
import { get } from 'lodash';
import { useSelect } from 'src/hooks/useSelect';
import { SelectOptionType, ControlValueType } from '../types';
import { getOptionValue } from '../utils';
import {
  IconUnitedKingdomFlag,
  IconDenmarkFlag,
  IconFranceFlag,
  IconGermanyFlag,
  IconItalyFlag,
  IconKoreaFlag,
  IconSpainFlag,
} from '../../Icons';
import {
  Wrapper,
  DropDownHeader,
  DropDownBody,
  DropDownOption,
  HeaderValue,
  StyledIconActionChevronDown,
} from './FrameColorSelector.styles';

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

const flagByTypeMap = {
  'EN-GB': <IconUnitedKingdomFlag />,
  'NL-NL': <IconDenmarkFlag />,
  'FR-FR': <IconFranceFlag />,
  'DE-DE': <IconGermanyFlag />,
  'IT-IT': <IconItalyFlag />,
  'KO-KR': <IconKoreaFlag />,
  'ES-ES': <IconSpainFlag />,
};

const countryByTypeMap = {
  'EN-GB': 'United Kingdom',
  'NL-NL': 'Denmark',
  'FR-FR': 'France',
  'DE-DE': 'Germany',
  'IT-IT': 'Italy',
  'KO-KR': 'Korea',
  'ES-ES': 'Spain',
};

const FrameLanguageSelector: FC<Props> = ({ options, onChange, code, controlValue }) => {
  const { isOpen, handelOpenClose, headerRef } = useSelect();

  return (
    <Wrapper>
      <DropDownHeader onClick={handelOpenClose} ref={headerRef}>
        {get(flagByTypeMap, controlValue.selectedOption)}
        <HeaderValue>
          <span style={{ fontWeight: 500 }}>
            {get(countryByTypeMap, controlValue.selectedOption)}
          </span>{' '}
          ({get(nameByTypeMap, controlValue.selectedOption, controlValue.selectedOption)})
        </HeaderValue>
        <StyledIconActionChevronDown isOpen={isOpen} />
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
