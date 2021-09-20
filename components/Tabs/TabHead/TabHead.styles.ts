import styled from 'styled-components';

export const StyledTabHead = styled.ul<{ withPadding?: boolean }>`
  display: flex;
  margin: 0;
  padding: ${({ withPadding }) => (withPadding ? `0 16px` : '0')};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  list-style: none;
  gap: 10px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  background-color: ${({ theme }) => theme.colors.tabBackground};
`;

export const StyledTabHeadLink = styled.button<{ active: boolean }>`
  display: inline-block;
  padding: 13px 8px;
  color: ${({ active, theme }) => (active ? theme.colors.base : theme.colors.tabTitle)};
  background: transparent;
  border: none;
  border-bottom: 4px solid ${({ active, theme }) => (active ? theme.colors.base : 'transparent')};
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
  cursor: pointer;
`;
