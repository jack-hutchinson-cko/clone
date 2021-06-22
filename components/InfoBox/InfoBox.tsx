import { FC } from 'react';
import { IconActionInfo } from '@cko/icons';
import { StyledInfoBox } from './InfoBox.styles';

const InfoBox: FC = ({ children }) => {
  return (
    <StyledInfoBox>
      <IconActionInfo />
      <div>{children}</div>
    </StyledInfoBox>
  );
};

export default InfoBox;
