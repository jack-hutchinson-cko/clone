import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  color: ${({ theme }) => theme.colors.baseLight};
  font-weight: 400;
`;
