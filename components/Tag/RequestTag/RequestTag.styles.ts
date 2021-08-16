import styled from 'styled-components';

import { ThemeType } from 'types/theme';
import { RequestTagProps } from '../types';

const getColorWithType = ({ type, theme }: { type: RequestTagProps['type']; theme: ThemeType }) => {
  switch (type) {
    case 'post':
      return theme.colors.postTag;

    case 'delete':
      return theme.colors.warning;

    case 'patch':
      return theme.colors.note;

    case 'put':
      return theme.colors.putTag;

    case 'get':
    default:
      return theme.colors.getTag;
  }
};

export const StyledRequestTag = styled.span<RequestTagProps>`
  display: inline-block;
  margin-right: 10px;
  padding: 4px 6px;
  color: ${({ theme }) => theme.colors.white};
  background: ${getColorWithType};
  border-color: ${getColorWithType};
  border-radius: 3px;
  font-family: Courier, monospace;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 16px;
  user-select: none;
`;
