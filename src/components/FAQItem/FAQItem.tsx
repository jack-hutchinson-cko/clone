import { FC, ReactNode } from 'react';
import { QuestionWrapper, StyledAccordion } from './FAQItem.styles';

type Props = {
  title?: string | ReactNode;
  isExpanded?: boolean;
  withHorizontal?: boolean;
};

const Question = () => <QuestionWrapper>Q:</QuestionWrapper>;

const FAQItem: FC<Props> = ({
  title,
  children,
  isExpanded = false,
  withHorizontal = true,
  ...otherProps
}) => {
  return (
    <StyledAccordion
      title={title}
      headerIcon={<Question />}
      isExpanded={isExpanded}
      withHorizontal={withHorizontal}
      {...otherProps}
    >
      {children}
    </StyledAccordion>
  );
};

export default FAQItem;
