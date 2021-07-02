import { TextFieldBase } from '@cko/primitives';
import styled from 'styled-components';

import { IconSearch } from 'components/Icons';

export const TextFieldHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  box-sizing: border-box;

  &:focus-within {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blueLight};
  }
`;

export const TextField = styled(TextFieldBase)`
  width: 100%;
  font-weight: 300;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.base};
  transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;
`;

export const SearchActionIcon = styled(IconSearch)``;
