import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.base};
  > *:last-child {
    margin-bottom: 0;
  }
`;
