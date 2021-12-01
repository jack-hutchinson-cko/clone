import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  color: grey;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > * {
    flex-basis: 100%;
  }
`;

export const StyledHeader = styled.h2`
  font-size: 56px;
  line-height: 56px;
  margin: 0;
`;

export const StyledSubHeader = styled.h3`
  font-size: 24px;
`;
