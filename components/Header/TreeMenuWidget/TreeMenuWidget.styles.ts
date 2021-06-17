import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.colors.base};

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
