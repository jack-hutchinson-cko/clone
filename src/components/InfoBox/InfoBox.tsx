import { FC } from 'react';
import { IconActionInfo } from '@cko/icons';
import { StyledInfoBox } from './InfoBox.styles';

type Props = {
  showIcon?: boolean;
};

const InfoBox: FC<Props> = ({ children, showIcon = true, ...rest }) => {
  return (
    <StyledInfoBox {...rest}>
      {showIcon && <IconActionInfo />}
      <div>{children}</div>
    </StyledInfoBox>
  );
};

export default InfoBox;
