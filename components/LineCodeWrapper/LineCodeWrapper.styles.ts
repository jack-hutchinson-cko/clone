import styled from 'styled-components';

export const StyledLineCodeWrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.base};
  background: ${({ theme }) => theme.colors.codeLabelBackground};
  padding: 15px;

  div,
  p {
    padding: 0;
    margin: 0;
    align-self: center;
  }
`;
