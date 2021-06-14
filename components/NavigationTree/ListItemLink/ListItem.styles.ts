import styled from 'styled-components';

export const StyledLink = styled.a<{ isActive?: boolean }>`
  border-top: 2px solid transparent;
  border-bottom: 2px solid ${({ isActive }) => (isActive ? '#80E5E9' : 'transparent')};

  &:hover {
    text-decoration: ${({ isActive }) => (isActive ? 'none' : 'underline')};
  }
`;
