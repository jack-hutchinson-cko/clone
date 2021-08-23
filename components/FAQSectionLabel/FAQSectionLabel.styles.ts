import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 16px 0;
`;

export const LabelWrapper = styled.span`
  color: ${({ theme }) => theme.colors.grayFaded};
  font-size: 11px;
  font-weight: 500;
  line-height: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;
