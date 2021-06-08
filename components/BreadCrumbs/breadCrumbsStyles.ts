import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`

export const StyledLinkContainer = styled.span`
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;

  &:last-child {
    font-weight: 500;
  }
`

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.base};
  &:hover {
    text-decoration: underline;
  }
`
