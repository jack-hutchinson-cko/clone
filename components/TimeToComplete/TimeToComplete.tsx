import { FC } from 'react';
import { Wrapper } from './TimeToComplete.styles';
import { IconClock } from '../Icons';

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
