import React, { useContext, useEffect, FC } from 'react';
import { CodeHandler } from './IBuilderFrameworkTab';
import { ControlType, ControlOptionType, SelectOptionType } from './types';
import { getCodeProperty, getOptionValue } from './utils';
import FrameColorSelector from './IBuilderControls/FrameColorSelector';
import FrameFontSizeSelector from './IBuilderControls/FrameFontSizeSelector';
import FrameLanguageSelector from './IBuilderControls/FrameLanguageSelector';

const ControlComponentByType = {
  frameColorSelector: FrameColorSelector,
  frameFontSizeSelector: FrameFontSizeSelector,
  frameLanguageSelector: FrameLanguageSelector,
};

type IBuilderCodeControlProps = {
  controlType: ControlType;
  optionType: ControlOptionType;
  tab: string;
  lines: number[];
  options: SelectOptionType[];
};

const IBuilderCodeControl: FC<IBuilderCodeControlProps> = ({
  children,
  tab,
  lines,
  options,
  optionType,
}) => {
  const id = `${tab}-${JSON.stringify(lines)}`;
  const { onChange, codeControlState } = useContext(CodeHandler);
  const { code, insertedRowsCount } = getCodeProperty(children);

  const handleChange = ({
    selectedOption,
    optionValue,
  }: {
    selectedOption: string;
    optionValue: string;
  }) => {
    onChange({
      id,
      data: { selectedOption, tab, optionValue, optionType, lines, insertedRowsCount },
    });
  };

  useEffect(() => {
    const { selectedOption, optionValue } = getOptionValue({
      optionItem: options[0] || {},
      code,
    });

    if (selectedOption) {
      handleChange({ selectedOption, optionValue });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentControlValue = codeControlState[id] || {};
  const ControlComponent = ControlComponentByType[optionType];

  if (!ControlComponent) {
    return null;
  }

  return (
    <ControlComponent
      controlValue={currentControlValue}
      onChange={handleChange}
      options={options}
      code={code}
    />
  );
};

export default IBuilderCodeControl;
