import styled from 'styled-components';

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.base};
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;
