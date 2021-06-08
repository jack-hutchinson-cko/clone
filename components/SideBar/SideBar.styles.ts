import styled from 'styled-components'

export const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.colors.base};

  a {
    color: inherit;
    text-decoration: none;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`
