import styled from 'styled-components';
import { spacing } from 'constants/spacingSize';

export const StyledAccordion = styled.div<{ isMdxMode?: boolean }>`
  padding: ${({ isMdxMode }) => (isMdxMode ? 0 : `${spacing.s40}px 0`)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.base};
  font-family: inherit;
`;

export const AccordionBodyWrapper = styled.div<{ height: string; overflow: string }>`
  height: ${({ height }) => `${height}px`};
  overflow-y: ${({ overflow }) => `${overflow}`};
  transition: height 1s ease;
`;

export const AccordionTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const InnerContentWrapper = styled.div`
  padding-bottom: ${spacing.s50}px;
  > *:last-child {
    margin-bottom: 0;
  }
`;
