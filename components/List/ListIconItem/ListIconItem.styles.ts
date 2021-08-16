import styled from 'styled-components';

import { ListIconItemType } from '../types';

export const ListIconItem = styled.p<{ type: ListIconItemType }>`
  position: relative;
  margin: 0 0 26px 30px;
  padding-left: 22px;
  line-height: 24px;
  list-style-type: none;

  p {
    display: inline;
    margin: 0;
    padding: 0;
  }

  svg {
    position: absolute;
    top: calc(50% - 8px);
    left: 0px;
  }
`;
