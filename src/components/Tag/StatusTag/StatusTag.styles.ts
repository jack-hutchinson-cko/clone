import styled from 'styled-components';

import { ThemeType } from 'src/types/theme';
import { StatusTagProps } from '../types';

const getColorWithType = ({ type, theme }: { type: StatusTagProps['type']; theme: ThemeType }) => {
  switch (type) {
    case 'required':
      return theme.colors.danger;

    case 'recommended':
      return theme.colors.recommendedTag;

    case 'conditional':
    case 'optional':
    default:
      return theme.colors.optionalTag;
  }
};

export const StyledStatusTag = styled.span<StatusTagProps>`
  display: inline-block;
  padding: 3px 5px 2px 5px;
  min-width: 0;
  color: ${({ theme, type }) =>
    type === 'recommended' ? theme.colors.success : theme.colors.white};
  background: ${getColorWithType};
  border: none;
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`;

export const StatusTagWrapper = styled.div<{ display: string }>`
  ${({ display }) => `display: ${display}`}
`;
