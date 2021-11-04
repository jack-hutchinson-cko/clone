import styled from 'styled-components';
import { spacing } from 'src/constants/spacingSize';

export const ListIconItem = styled.p`
  position: relative;
  margin: 0 0 ${spacing.s40}px 0;
  padding-left: ${spacing.s50}px;
  line-height: 24px;
  list-style-type: none;

  p {
    display: inline;
    margin: 0;
    padding: 0;
  }

  svg {
    position: absolute;
    top: 2px;
    left: 0px;
  }
`;
