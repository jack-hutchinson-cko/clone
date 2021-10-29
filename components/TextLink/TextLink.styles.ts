import styled from 'styled-components';

interface LinkProps {
  withArrow?: boolean;
}

export const StyledLink = styled.a<LinkProps>`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.base};
  font-weight: 500;
  font-size: ${(props) => (props.withArrow ? '14' : '16')}px;
  &:hover {
    text-decoration: underline;
  }

  & svg {
    margin-left: 8px;
  }
  &:hover svg {
    transform: translateX(40%);
    transition: transform 0.15s linear 0s;
  }
`;
