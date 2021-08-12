import styled from 'styled-components';

export const ListNumberItem = styled.p`
  position: relative;
  margin: 0 0 26px 0;
  padding-left: 45px;
  line-height: 24px;
  list-style-type: none;

  > div {
    position: absolute;
    top: -4px;
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
