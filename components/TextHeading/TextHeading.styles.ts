import styled from 'styled-components';

export const TextHeadingOne = styled.h1`
  color: ${({ theme }) => theme.colors.base};
  font-size: 38px;
  font-weight: 600;
  margin: 32px 0;
`;

export const TextHeadingTwo = styled.h2`
  color: ${({ theme }) => theme.colors.base};
  font-size: 32px;
  font-weight: 600;
  margin: 26px 0;
`;

export const TextHeadingThree = styled.h3`
  color: ${({ theme }) => theme.colors.base};
  font-size: 24px;
  margin: 16px 0;
`;

export const TextHeadingFour = styled.h4`
  color: ${({ theme }) => theme.colors.base};
  font-size: 18px;
  margin: 16px 0;
`;
