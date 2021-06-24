import styled from 'styled-components';

export const StyledTabHead = styled.ul`
  display: flex;
  margin: 0;
  padding: 0 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight};
  list-style: none;
  gap: 10px;
`;

export const StyledTabHeadLink = styled.button<{ active: boolean }>`
  display: inline-block;
  padding: 13px 8px;
  color: ${({ active, theme }) => (active ? theme.colors.success : theme.colors.cometLight)};
  background: transparent;
  border: none;
  border-bottom: 4px solid ${({ active, theme }) => (active ? theme.colors.success : 'transparent')};
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
  cursor: pointer;
`;
