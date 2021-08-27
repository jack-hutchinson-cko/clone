import { FC } from 'react';
import { QuestionWrapper, StyledAccordion } from './FAQItem.styles';

type Props = {
  title: string;
};

const Question = () => <QuestionWrapper>Q:</QuestionWrapper>;

const FAQItem: FC<Props> = ({ title, children, ...otherProps }) => {
  return (
    <StyledAccordion title={title} {...otherProps} headerIcon={<Question />}>
      {children}
    </StyledAccordion>
  );
};

export default FAQItem;
