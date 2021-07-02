import styled from 'styled-components';

export const Section = styled.section<{ mode: 'header' | 'page' }>`
  padding: ${({ mode }) => (mode === 'header' ? '8px' : '16px')};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.modalHoverBackground};
  }
  border-radius: ${({ mode }) => (mode === 'header' ? '8px' : '16px')};
`;

export const HitsContainer = styled.div<{ maxHeight?: number }>`
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : '100%')};
  overflow: auto;
`;
