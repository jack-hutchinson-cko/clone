import React, { FC } from 'react';
import { StepWrapper, Counter, TextHeadFour } from './IBuilderStep.styles';

type Props = {
  name: string;
  currentStep: number;
};

const IBuilderStep: FC<Props> = ({ name, currentStep }) => {
  return (
    <StepWrapper>
      <Counter>{currentStep}</Counter>
      <TextHeadFour>{name}</TextHeadFour>
    </StepWrapper>
  );
};

IBuilderStep.displayName = 'IBuilderStep';

export default IBuilderStep;
