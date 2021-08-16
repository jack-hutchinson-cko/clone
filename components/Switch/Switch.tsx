import React, { FC, ReactNode, ChangeEvent, useState, useEffect } from 'react';
import { IconWrapper, Toggle, Wrapper } from './Switch.styles';

type Props = {
  disabled?: boolean;
  checked?: boolean;
  icon?: ReactNode;
  checkedIcon?: ReactNode;
  onChange: (event: ChangeEvent, checked: boolean) => void;
};

const Switch: FC<Props> = ({
  onChange,
  icon = null,
  checkedIcon = null,
  disabled = false,
  checked = false,
  ...rest
}) => {
  const [checkedInput, setCheckedInput] = useState(checked);

  useEffect(() => {
    setCheckedInput(checked);
  }, [checked]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedInput(!checkedInput);
    onChange(event, !checkedInput);
  };

  return (
    <Wrapper {...rest}>
      <IconWrapper>{checkedIcon}</IconWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Toggle checked={checkedInput}>
        <input
          type="checkbox"
          checked={checkedInput}
          disabled={disabled}
          onChange={onChangeHandler}
        />
      </Toggle>
    </Wrapper>
  );
};

export default Switch;
