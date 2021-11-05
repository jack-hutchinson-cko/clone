import styled from 'styled-components';

export const BlockLink = styled.a`
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.base};
  & svg {
    margin-left: 8px;
  }
  &:hover svg {
    transform: translateX(40%);
    transition: transform 0.15s linear 0s;
  }
`;