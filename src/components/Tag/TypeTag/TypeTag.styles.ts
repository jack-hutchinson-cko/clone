import styled from 'styled-components';
import { TypeTagProps } from '../types';

export const StyledTypeTag = styled.span<TypeTagProps>`
  display: inline-block;
  padding: 0;
  color: ${({ theme }) => theme.colors.base};
  border-radius: 3px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-transform: lowercase;
`;
