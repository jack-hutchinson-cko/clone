import styled from 'styled-components';

export const StyledLineCodeWrapper = styled.div`
  display: flex;
  padding: 15px;
  color: ${({ theme }) => theme.colors.base};
  background: ${({ theme }) => theme.colors.codeLabelBackground};

  div,
  p {
    padding: 0;
    margin: 0;
    align-self: center;
  }
`;
