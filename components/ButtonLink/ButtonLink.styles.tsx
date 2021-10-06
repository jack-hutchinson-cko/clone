import styled from 'styled-components';
import Link from 'next/link';

export const Button = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.btnPrimaryBackground};
  color: ${({ theme }) => theme.colors.btnPrimaryFont};
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  outline: 0;
  &:nth-child(3) {
    margin-right: 16px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.fiordLight};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.btnPrimaryBackground};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.catskillWhite};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
`;
