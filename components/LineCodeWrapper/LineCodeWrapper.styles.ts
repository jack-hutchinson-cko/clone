import styled from 'styled-components';

export const StyledLineCodeWrapper = styled.div`
  display: flex;
  padding: 15px;
  color: ${({ theme }) => theme.colors.base};
  background: ${({ theme }) => theme.colors.codeLabelBackground};
  border-end-start-radius: 8px;
  border-end-end-radius: 8px;
  white-space: nowrap;
  overflow: auto;

  div,
  p {
    padding: 0;
    margin: 0;
    align-self: center;
  }
`;
