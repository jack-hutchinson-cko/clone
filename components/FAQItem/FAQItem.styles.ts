import styled, { css } from 'styled-components';
import Accordion from 'components/Accordion';
import { createBreakpointBetween, SIZE } from 'constants/screen';

export const QuestionWrapper = styled.span`
  font-weight: 500;
`;

export const StyledAccordion = styled(Accordion)<{ withHorizontal?: boolean }>`
  @media ${createBreakpointBetween(SIZE.SM, SIZE.M)} {
    padding: 28px 0px;
    button {
      font-size: 24px;
      line-height: 32px;
      font-weight: 500;
    }
  }

  p {
    margin-top: 8px;
    margin-bottom: 10px;
  }

  ${({ withHorizontal }) =>
    !withHorizontal &&
    css`
      border-bottom: none;
    `}
`;
