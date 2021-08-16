import { FC } from 'react';
import { TextHeadingThree } from 'components/TextHeading';
import { StepWrapper, Counter } from './IBuilderStep.styles';

type Props = {
  name: string;
  currentStep: number;
};

const IBuilderStep: FC<Props> = ({ name, currentStep }) => {
  return (
    <StepWrapper>
      <Counter>{currentStep}</Counter>
      <TextHeadingThree>{name}</TextHeadingThree>
    </StepWrapper>
  );
};

IBuilderStep.displayName = 'IBuilderStep';

export default IBuilderStep;
