import styled from 'styled-components';
import Accordion from 'components/Accordion';
import { createBreakpointBetween, SIZE } from 'constants/screen';

export const QuestionWrapper = styled.span`
  font-weight: bold;
`;

export const StyledAccordion = styled(Accordion)`
  @media ${createBreakpointBetween(SIZE.SM, SIZE.M)} {
    padding: 28px 0px;
    button {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;
