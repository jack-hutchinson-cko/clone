import styled from 'styled-components';

export const StyledAccordion = styled.div`
  padding: 25px 0 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyLight};
  color: ${({ theme }) => theme.colors.success};
  font-family: inherit;
`;
