import { FC } from 'react';
import Accordion from 'components/Accordion';
import { QuestionWrapper } from './FAQItem.styles';

type Props = {
  title: string;
};

const Question = () => <QuestionWrapper>Q:</QuestionWrapper>;

const FAQItem: FC<Props> = ({ title, children, ...otherProps }) => {
  return (
    <Accordion title={title} {...otherProps} headerIcon={<Question />}>
      {children}
    </Accordion>
  );
};

export default FAQItem;
