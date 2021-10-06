import { FC } from 'react';
import { TextHeadingTwo } from 'components/TextHeading';
import { FrontMatterContainer } from 'styles/index.styles';
import WarningMessage from 'components/WarningMessage';
import TimeToComplete from '../TimeToComplete';
import { MainWrapper } from './IBuilderHeader.styles';

type Props = {
  title: string;
  time: string;
  message: string;
};

const IBuilderHeader: FC<Props> = (props) => {
  const { children, title, time, message } = props;
  return (
    <MainWrapper>
      {title ? <TextHeadingTwo>{title}</TextHeadingTwo> : null}
      {time && message && (
        <FrontMatterContainer>
          <TimeToComplete time={time} />
          <WarningMessage message={message} />
        </FrontMatterContainer>
      )}
      <div>{children}</div>
    </MainWrapper>
  );
};

IBuilderHeader.displayName = 'IBuilderHeader';

export default IBuilderHeader;
