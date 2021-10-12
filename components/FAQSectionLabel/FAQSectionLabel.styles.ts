import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 16px 0;
`;

export const LabelWrapper = styled.span`
  color: ${({ theme }) => theme.colors.grayFaded};
  font-size: 11px;
  line-height: 24px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;
