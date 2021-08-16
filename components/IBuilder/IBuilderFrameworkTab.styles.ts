import styled from 'styled-components';

export const MainWrapper = styled.div`
  margin-top: 24px;
`;

export const CodeTabWrapper = styled.div`
  height: calc(100vh - 128px);
  background: ${({ theme }) => theme.colors.codeLabelBackground};
  position: sticky;
  top: 104px;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 128px);
  border-radius: 5px;
  overflow: hidden;
`;
