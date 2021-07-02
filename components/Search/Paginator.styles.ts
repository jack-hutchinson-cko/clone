import styled from 'styled-components';

export const PaginatorContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  & > a {
    text-decoration: none;
    font-size: 14px;
    padding: 0 8px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
