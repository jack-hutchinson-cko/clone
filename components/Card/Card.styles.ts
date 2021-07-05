import styled from 'styled-components';
import { Flex } from '@cko/primitives';
import { Text } from '../Text';

export const CardWrapper = styled(Flex)`
  flex-direction: column;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors.greyLight};
  transition: box-shadow 0.3s, border-color 0.7s;
  border-radius: 8px;
  cursor: pointer;
  height: 100%;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.focusLight[2]};
    border-color: ${({ theme }) => theme.colors.blueTertiary};
  }
  svg {
    margin-left: auto;
  }
`;

export const TextContainer = styled(Text)`
  flex-grow: 1;
`;
