import { FC } from 'react';
import { Wrapper, FakeCheckbox, Input } from './Toggle.styles';

type Props = {
  id: string;
  checked: boolean;
  onChangeHandler: () => void;
};

const Toggle: FC<Props> = ({ id, checked, onChangeHandler }) => {
  return (
    <Wrapper>
      <Input type="checkbox" id={id} checked={checked} onChange={onChangeHandler} />
      <FakeCheckbox htmlFor={id} />
    </Wrapper>
  );
};

export default Toggle;
