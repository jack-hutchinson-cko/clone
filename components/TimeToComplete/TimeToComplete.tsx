import { FC } from 'react';
import { IconClock } from '../Icons';
import { Wrapper } from './TimeToComplete.styles';

type Props = {
  time: string;
};

const TimeToComplete: FC<Props> = ({ time }) => {
  return (
    <Wrapper>
      <IconClock />
      <span>{+time} minutes</span>
    </Wrapper>
  );
};

export default TimeToComplete;
