import { FC } from 'react';
import { TextHeadingTwo } from 'components/TextHeading';
import { MainWrapper } from './IBuilderHeader.styles';

type Props = {
  title: string;
};

const IBuilderHeader: FC<Props> = ({ children, title }) => {
  return (
    <MainWrapper>
      {title ? <TextHeadingTwo>{title}</TextHeadingTwo> : null}
      <div>{children}</div>
    </MainWrapper>
  );
};

IBuilderHeader.displayName = 'IBuilderHeader';

export default IBuilderHeader;
