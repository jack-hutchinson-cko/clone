import styled from 'styled-components';

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.base};
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`;
