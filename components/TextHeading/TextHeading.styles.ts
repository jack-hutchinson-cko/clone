import styled from 'styled-components';

export const TextHeadingOne = styled.h1`
  color: ${({ theme }) => theme.colors.base};
  font-size: 38px;
  margin: 32px 0;
`;

export const TextHeadingTwo = styled.h2`
  color: ${({ theme }) => theme.colors.base};
  font-size: 32px;
  margin: 26px 0;
`;

export const TextHeadingThree = styled.h3`
  color: ${({ theme }) => theme.colors.base};
  font-size: 24px;
  margin: 16px 0;
`;
