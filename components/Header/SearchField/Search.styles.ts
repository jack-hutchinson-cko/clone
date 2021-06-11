import { TextFieldBase } from '@cko/primitives';
import styled from 'styled-components';

export const TextFieldWrapper = styled.div`
  position: relative;
`;

export const TextField = styled(TextFieldBase)<{ width?: number }>`
  width: ${({ width }) => width ?? '100%'};
  padding: 8px 26px 8px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  background-clip: padding-box;
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  font-weight: 300;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.base};
  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blueLight};
  }
`;

export const TextAction = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 10px;
`;
