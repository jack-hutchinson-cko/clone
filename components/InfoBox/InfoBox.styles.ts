import styled from 'styled-components';

export const StyledInfoBox = styled.pre`
  position: relative;
  bottom: -4px;
  display: flex;
  font-family: inherit;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  white-space: normal;
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

  code {
    display: contents;
    font-size: 12px;
  }
`;
