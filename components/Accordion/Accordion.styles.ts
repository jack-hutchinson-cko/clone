import styled from 'styled-components';

export const StyledAccordion = styled.div`
  padding: 25px 0 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.base};
  font-family: inherit;
`;

export const AccordionBodyWrapper = styled.div<{ height: number }>`
  height: ${({ height }) => `${height}px`};
  overflow-y: hidden;
  transition: height 1s ease;
`;
