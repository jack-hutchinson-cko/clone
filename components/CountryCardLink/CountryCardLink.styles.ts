import styled from 'styled-components';
import { spacing } from 'constants/spacingSize';

export const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: ${spacing.s40}px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: box-shadow 0.1s, border-color 0.7s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.light};
    border-color: ${({ theme }) => theme.colors.borderHighlight};
  }
`;

export const Title = styled.h4`
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
  margin: 0;
`;
