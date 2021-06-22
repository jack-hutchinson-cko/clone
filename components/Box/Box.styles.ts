import styled from 'styled-components';

export type SizeEnum = 'sm' | 'md';

export const Box = styled.div<{ vertical: SizeEnum; horizontal: SizeEnum }>`
  padding: ${({ vertical, horizontal, theme }) =>
    `${theme.padding[vertical] || 0} ${theme.padding[horizontal] || 0}`};
`;
