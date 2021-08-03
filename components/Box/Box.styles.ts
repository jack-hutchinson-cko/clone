import styled from 'styled-components';

export type SizeEnum = 'xsm' | 'sm' | 'md';
export type AlignCenter = 'center';

export const Box = styled.div<{
  align: AlignCenter;
  vertical: SizeEnum;
  horizontal: SizeEnum;
}>`
  padding: ${({ vertical, horizontal, theme }) =>
    `${theme.padding[vertical] || 0} ${theme.padding[horizontal] || 0}`};
  display: ${({ align }) => `${align === 'center' ? 'flex' : 'block'}`};
  justify-content: ${({ align }) => `${align}`};
`;
