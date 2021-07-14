import styled from 'styled-components';

export const Button = styled.div`
  display: inline-block;

  svg {
    color: ${({ theme }) => theme.colors.base} !important;
  }
`;
