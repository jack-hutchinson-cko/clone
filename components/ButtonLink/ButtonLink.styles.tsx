import styled from 'styled-components';
import Link from 'next/link';

export const Button = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.btnPrimaryBackground};
  color: ${({ theme }) => theme.colors.btnPrimaryFont};
  margin-right: 16px;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  outline: 0;
  &:hover {
    opacity: 0.8;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
`;
