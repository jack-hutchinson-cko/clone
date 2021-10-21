import styled from 'styled-components';

export const StyledTabs = styled.div<{ withBorder?: boolean }>`
  border: ${({ withBorder, theme }) =>
    withBorder ? `1px solid ${theme.colors.tabBorder}` : 'none'};
  border-radius: 8px;
`;
