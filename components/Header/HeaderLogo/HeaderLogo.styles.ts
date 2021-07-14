import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.base};

  svg {
    color: ${({ theme }) => theme.colors.base} !important;
  }
`;
