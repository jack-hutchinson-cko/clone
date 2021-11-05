import styled from 'styled-components';
import { spacing } from 'src/constants/spacingSize';

export const StyledInfoBox = styled.pre`
  position: relative;
  display: flex;
  font-family: inherit;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  white-space: normal;
  vertical-align: baseline;
  margin: 0 0 ${spacing.s30}px 0;

  svg {
    width: 10px;
    min-width: 10px;
    max-width: 10px;
    margin-right: 5px;
    stroke: ${({ theme }) => theme.colors.base};
  }

  div,
  p {
    margin: 0;
    padding: 0;
    font-size: inherit;
    line-height: inherit;
  }

  div > p > a {
    font-size: 12px;
  }

  code {
    display: contents;
    font-size: 12px;
  }
`;
