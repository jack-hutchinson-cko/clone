import styled from 'styled-components';

export const StyledInfoBox = styled.div`
  position: relative;
  bottom: -4px;
  display: flex;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  vertical-align: baseline;

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
`;
