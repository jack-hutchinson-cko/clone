import styled from 'styled-components';

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.baseLight};
  font-size: 16px;
  margin: 16px 0;
  line-height: 24px;
  font-weight: 300;
`;
