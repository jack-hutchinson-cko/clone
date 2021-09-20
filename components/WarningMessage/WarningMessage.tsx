import { FC } from 'react';
import { Wrapper, StatusIndicator } from './WarningMessage.styles';

type Props = {
  message: string;
};

const WarningMessage: FC<Props> = ({ message }) => {
  return (
    <Wrapper>
      <StatusIndicator />
      {message}
    </Wrapper>
  );
};

export default WarningMessage;
