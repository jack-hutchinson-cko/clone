import styled from 'styled-components';
import { TextHeadingFour } from 'components/TextHeading';

export const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 24px 0;
`;

export const Counter = styled.div`
  height: 28px;
  width: 28px;
  min-width: 28px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.base};
`;

export const TextHeadFour = styled(TextHeadingFour)`
  font-weight: 500;
  margin: 0;
`;
