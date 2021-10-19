import styled from 'styled-components';
import { spacing } from 'constants/spacingSize';

export const ListNumberItem = styled.div`
  position: relative;
  margin: 0 0 ${spacing.s20}px 0;
  padding-left: ${spacing.s80}px;
  line-height: 24px;
  min-height: 32px;
  list-style-type: none;
  display: flex;
  align-items: center;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-flex;
    align-items: center;
  }

  p {
    display: inline;
    margin: 0;
    padding: 0;
  }
`;

export const Decimal = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 11px;
  width: 32px;
  height: 32px;
  color: ${({ theme }) => theme.colors.baseLight};
  background: ${({ theme }) => theme.colors.backgroundSearch};
  font-size: 16px;
  border-radius: 50%;
`;
