import { FC } from 'react';
import { MainWrapper, FrameWorkItemWrapper, FrameWorkBtn } from './IBuilderFrameWorks.styles';
import { SelectedFramework } from './types';

type Props = {
  backEnd: string[];
  frontEnd: string[];
  selectedFrameworks: {
    frontEnd: string;
    backEnd: string;
  };
  setSelectedFrameWorks: (params: SelectedFramework) => void;
};

const IBuilderFrameWorks: FC<Props> = ({
  backEnd,
  frontEnd,
  selectedFrameworks,
  setSelectedFrameWorks,
}) => {
  const handelClickFrameworkBtn = (data: SelectedFramework) => () => {
    setSelectedFrameWorks(data);
  };

  return (
    <MainWrapper>
      <FrameWorkItemWrapper>
        Frontend:{' '}
        {frontEnd.map((frameWorkName) => (
          <FrameWorkBtn
            key={frameWorkName}
            isSelected={selectedFrameworks.frontEnd === frameWorkName}
            onClick={handelClickFrameworkBtn({
              frontEnd: frameWorkName,
              backEnd: selectedFrameworks.backEnd,
            })}
          >
            {frameWorkName}
          </FrameWorkBtn>
        ))}
      </FrameWorkItemWrapper>
      <FrameWorkItemWrapper>
        Backend:{' '}
        {backEnd.map((frameWorkName) => (
          <FrameWorkBtn
            key={frameWorkName}
            isSelected={selectedFrameworks.backEnd === frameWorkName}
            onClick={handelClickFrameworkBtn({
              frontEnd: selectedFrameworks.frontEnd,
              backEnd: frameWorkName,
            })}
          >
            {frameWorkName}
          </FrameWorkBtn>
        ))}
      </FrameWorkItemWrapper>
    </MainWrapper>
  );
};

IBuilderFrameWorks.displayName = 'IBuilderFrameWorks';

export default IBuilderFrameWorks;
