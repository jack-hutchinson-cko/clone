import styled from 'styled-components';
import { Link as PrimitiveLink } from '@cko/primitives';
import { Breakpoints } from 'constants/screen';

export const BlockLink = styled(PrimitiveLink)`
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.base};
  & svg {
    margin-left: 8px;
  }
  &:hover svg {
    transform: translateX(40%);
    transition: transform 0.15s linear 0s;
  }

  @media ${Breakpoints.MOBILE} {
    font-size: 16px;
    line-height: 24px;
  }
`;
