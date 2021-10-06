import { useState, useEffect, FC, ChangeEvent } from 'react';
import { Wrapper, Container, Input, CurrentColor, Label, InputWrapper } from './ColorPicker.styles';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const ColorPicker: FC<Props> = ({ value, onChange }) => {
  const [color, setColor] = useState<string>(value || '');
  const [isValid, setIsValid] = useState(true);

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = event.target;

    const regExp = /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    const isValidValue = regExp.test(inputValue);

    setColor(inputValue);
    setIsValid(isValidValue);

    if (isValidValue) {
      onChange(inputValue);
    }
  };

  useEffect(() => {
    setColor(value);
    setIsValid(true);
  }, [value]);

  return (
    <Wrapper>
      <Container>
        <Label>
          Enter the color value in <span>hex</span> format.
        </Label>
        <InputWrapper isValid={isValid}>
          <Input type="text" placeholder="#000000" value={color} onChange={handelChange} />
        </InputWrapper>
        <CurrentColor colorValue={color} />
      </Container>
    </Wrapper>
  );
};

export default ColorPicker;
