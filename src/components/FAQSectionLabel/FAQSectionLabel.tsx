import { FC } from 'react';
import { LabelWrapper, Wrapper } from './FAQSectionLabel.styles';

const FAQSectionLabel: FC = ({ children }) => (
  <Wrapper>
    <LabelWrapper>{children}</LabelWrapper>
  </Wrapper>
);
export default FAQSectionLabel;
